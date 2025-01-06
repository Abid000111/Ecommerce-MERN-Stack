/* eslint-disable indent */
/* eslint-disable no-case-declarations */

const productReducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING":
			return {
				...state,
				isLoading: true
			};

		case "SET_API_DATA":
			const featureData = action.payload.Products.filter((curElem) => {
				return curElem.featured === true;
			});

			return {
				...state,
				isLoading: false,
				products: action.payload.Products,
				featureProducts: featureData
			};

		case "API_ERROR":
			return {
				...state,
				isLoading: false,
				isError: true
			};

		case "SET_SINGLE_LOADING":
			return {
				...state,
				isSingleLoading: true
			};

		case "SET_SINGLE_PRODUCT":
			return {
				...state,
				isSingleLoading: false,
				singleProduct: action.payload.Products[0]
			};

		case "SET_SINGLE_ERROR":
			return {
				...state,
				isSingleLoading: false,
				isError: true
			};

		case "LOAD_FILTER_PRODUCTS":
			return {
				...state,
				filter_products: [...action.payload.Products]
			};

		default:
			return state;
	}
};

export default productReducer;
