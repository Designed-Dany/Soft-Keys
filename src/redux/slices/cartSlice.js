import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	count: 0,
	products: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.products.find((obj) => obj.id === action.payload.id)

			if (findItem) {
				findItem.count++;
			} else {
				state.products.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = state.products.reduce((sum, obj) => {
				return obj.price + sum
			}, 0)
		},
		removeItem(state, action) {
			state.products = state.products.filter(obj => obj.id !== action.payload)
		},
		clearItem(state) {
			state.products = []
		}
	}
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;