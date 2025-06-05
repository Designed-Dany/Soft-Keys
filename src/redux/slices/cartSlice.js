import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	products: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			state.products.push(action.payload);
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