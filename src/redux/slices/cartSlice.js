import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	count: 1,
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
      // Обновляем общую стоимость
    state.totalPrice = state.products.reduce((sum, obj) => {
      return (obj.price * obj.count) + sum;
    }, 0);	
		},
		removeItem(state, action) {
			state.products = state.products.filter(obj => obj.id !== action.payload)
			state.totalPrice = state.products.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0);	
		},
		removeCount(state, action) {
			const findItem = state.products.find((obj) => obj.id === action.payload)

			if (findItem) {
				findItem.count--;
			}	

			state.totalPrice = state.products.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0);
		},
		addCount(state, action) {
			const findItem = state.products.find((obj) => obj.id === action.payload)

			if (findItem) {
				findItem.count++;
			}	

			state.totalPrice = state.products.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0);
		},
		clearItem(state) {
			state.products = []
			state.products.count = 0;
			state.totalPrice = 0;
		}
	}
})

export const { addItem, removeItem, clearItem, removeCount, addCount } = cartSlice.actions;

export default cartSlice.reducer;