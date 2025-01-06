import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState
} from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

// const getLocalCartData = () => {
// 	let localCartData = localStorage.getItem("alphaaCart");
// 	if (localCartData === null) {
// 		return [];
// 	} else {
// 		return JSON.parse(localCartData);
// 	}
// };

const getLocalCartData = () => {
	if (typeof window !== "undefined") {
		let localCartData = localStorage.getItem("alphaaCart");
		if (localCartData === null) {
			return [];
		} else {
			return JSON.parse(localCartData);
		}
	} else {
		return [];
	}
};

// const getLocalOrderData = () => {
// 	let localOrderData = localStorage.getItem("alphaaOrder");
// 	if (localOrderData === null) {
// 		return [];
// 	} else {
// 		return JSON.parse(localOrderData);
// 	}
// };

const getLocalOrderData = () => {
	if (typeof window !== "undefined") {
		let localOrderData = localStorage.getItem("alphaaOrder");
		if (localOrderData === null) {
			return [];
		} else {
			return JSON.parse(localOrderData);
		}
	} else {
		return [];
	}
};

// const getLocalOrderArray = () => {
// 	let localOrderArray = localStorage.getItem("alphaaArray");
// 	if (localOrderArray === null) {
// 		return [];
// 	} else {
// 		return JSON.parse(localOrderArray);
// 	}
// };

const getLocalOrderArray = () => {
	if (typeof window !== "undefined") {
		let localOrderArray = localStorage.getItem("alphaaArray");
		if (localOrderArray === null) {
			return [];
		} else {
			return JSON.parse(localOrderArray);
		}
	} else {
		return [];
	}
};

const initialState = {
	cart: getLocalCartData(),
	total_item: "",
	total_amount: "",
	total_price: "",
	orderInfo: getLocalOrderData(),
	array: getLocalOrderArray()
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [cartScreen, setCartScreen] = useState(false);

	const addToCart = (name, price, id, color, _size, image, amount, product) => {
		dispatch({
			type: "ADD_TO_CART",
			payload: { name, price, id, color, _size, image, amount, product }
		});
	};

	const order = (name, color, _size, price, amount, image, product) => {
		dispatch({
			type: "ORDER",
			payload: { name, color, _size, price, amount, image, product }
		});
	};

	const checkOutClick = () => {
		dispatch({ type: "CHECKOUT_CLICK" });
	};

	const buyClick = () => {
		dispatch({ type: "BUY_CLICK" });
	};

	// increase and decrease product

	const setDecrease = (id) => {
		dispatch({ type: "SET_DECREASE", payload: id });
	};

	const setIncrease = (id) => {
		dispatch({ type: "SET_INCREASE", payload: id });
	};

	// to remove the individual item from cart

	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	// to clear cartScreen

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	// to add the data in localStorage

	useEffect(() => {
		dispatch({ type: "CART_TOTAL_ITEM" });
		dispatch({ type: "CART_TOTAL_PRICE" });
		localStorage.setItem("alphaaCart", JSON.stringify(state.cart));
		localStorage.setItem("alphaaOrder", JSON.stringify(state.orderInfo));
		localStorage.setItem("alphaaArray", JSON.stringify(state.array));
	}, [state.cart, state.orderInfo, state.array]);

	return (
		<CartContext.Provider
			value={{
				...state,
				addToCart,
				removeItem,
				clearCart,
				setDecrease,
				setIncrease,
				order,
				buyClick,
				checkOutClick,
				cartScreen,
				setCartScreen
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCartContext = () => {
	return useContext(CartContext);
};

export { CartProvider, useCartContext };
