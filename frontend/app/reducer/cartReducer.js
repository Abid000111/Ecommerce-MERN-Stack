const cartReducer = (state, action) => {
	if (action.type === "ADD_TO_CART") {
		let { name, price, id, color, _size, image, amount, product } =
			action.payload;
		// console.log(product);

		// tackle existing product

		// let existingProduct = state.cart.find((curItem) => curItem.id == id + color);
		let existingProduct = state.cart.find(
			(curItem) => curItem.id == id + color + _size
		);

		// console.log("exisiting product", existingProduct);

		if (existingProduct) {
			let updatedProduct = state.cart.map((curElem) => {
				if (curElem.id == id + color + _size) {
					let newAmount = curElem.amount + amount;

					if (newAmount >= curElem.max) {
						newAmount = curElem.max;
					}

					return {
						...curElem,
						amount: newAmount
					};
				} else {
					return curElem;
				}
			});
			return {
				...state,
				cart: updatedProduct
			};
		} else {
			let cartProduct = {
				id: id + color + _size,
				name: name,
				color,
				amount,
				image,
				max: product.stock,
				price: price,
				size: _size
			};

			return {
				...state,
				cart: [...state.cart, cartProduct]
			};
		}
	}

	if (action.type === "ORDER") {
		let { name, color, _size, price, amount, image, product } = action.payload;
		console.log(product);
		return {
			...state,
			orderInfo: {
				name: name,
				color,
				size: _size,
				price: price,
				amount,
				image,
				total_price: price * amount
			}
		};
	}

	if (action.type === "CHECKOUT_CLICK") {
		return {
			...state,
			// array: [],
			array: [...state.cart]
		};
	}

	if (action.type === "BUY_CLICK") {
		return {
			...state,
			// array: [],
			array: [state.orderInfo]
		};
	}

	// to set the increase and decrease

	if (action.type === "SET_DECREASE") {
		let updatedProduct = state.cart.map((curElem) => {
			if (curElem.id === action.payload) {
				// console.log("cart minus elem => ",curElem);
				let decAmount = curElem.amount - 1;

				if (decAmount <= 1) {
					decAmount = 1;
				}

				return {
					...curElem,
					amount: decAmount
				};
			} else {
				return curElem;
			}
		});
		return { ...state, cart: updatedProduct };
	}

	if (action.type === "SET_INCREASE") {
		let updatedProduct = state.cart.map((curElem) => {
			if (curElem.id === action.payload) {
				// console.log("cart minus elem => ",curElem);
				let incAmount = curElem.amount + 1;

				if (incAmount >= curElem.max) {
					incAmount = curElem.max;
				}

				return {
					...curElem,
					amount: incAmount
				};
			} else {
				return curElem;
			}
		});
		return { ...state, cart: updatedProduct };
	}

	if (action.type === "REMOVE_ITEM") {
		let updatedCart = state.cart.filter(
			(curItem) => curItem.id != action.payload
		);
		return {
			...state,
			cart: updatedCart
		};
	}

	// to clear cartScreen

	if (action.type === "CLEAR_CART") {
		return {
			...state,
			cart: []
		};
	}

	if (action.type === "CART_TOTAL_ITEM") {
		let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
			let { amount } = curElem;
			initialVal = initialVal + amount;
			return initialVal;
		}, 0);

		return {
			...state,
			total_item: updatedItemVal
		};
	}

	if (action.type === "CART_TOTAL_PRICE") {
		let total_price = state.cart.reduce((initialVal, curElem) => {
			let { price, amount } = curElem;
			initialVal = initialVal + price * amount;
			return initialVal;
		}, 0);
		return {
			...state,
			total_price: total_price
		};
	}

	return state;
};

export default cartReducer;
// name, price, id, color, size, amount, product
