import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

// const API = "http://localhost:5001/api/products";
const API = "http://localhost:5001/api/products";

const initialState = {
	isLoading: false,
	isError: false,
	products: [],
	featureProducts: [],
	isSingleLoading: false,
	singleProduct: [],
	filter_products: [],
	sorting_value: "lowest"
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getProducts = async (url) => {
		dispatch({ type: "SET_LOADING" });
		try {
			const res = await axios.get(url);
			// console.log("data => ", res.data);
			const products = await res.data;
			// console.log(products);
			dispatch({ type: "SET_API_DATA", payload: products });
			dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
			dispatch({ type: "SORTING_PRODUCTS", payload: products });
		} catch (error) {
			dispatch({ type: "API_ERROR" });
		}
	};

	const getSingleProduct = async (url) => {
		dispatch({ type: "SET_SINGLE_LOADING" });
		try {
			const res = await axios.get(url);
			const singleProduct = await res.data;
			// console.log("single product......... =>", singleProduct)
			dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
			// console.log("single product =>", singleProduct);
		} catch (error) {
			dispatch({ type: "SET_SINGLE_ERROR" });
		}
	};

	// sorting function
	// const sorting = () => {
	// dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
	// dispatch({ type: "GET_SORT_VALUE" });
	// };

	// to sort the products
	// useEffect(() => {
	// 	dispatch({ type: "SORTING_PRODUCTS", payload: products });
	// }, [state.sorting_value]);

	useEffect(() => {
		getProducts(API);
	}, []);

	return (
		<AppContext.Provider value={{ ...state, getSingleProduct }}>
			{children}
		</AppContext.Provider>
	);
};

// custom hook

const useProductContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
