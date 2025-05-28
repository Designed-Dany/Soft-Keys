import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	items: []
}

const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorites(state, action) {
			state.items.push(action.payload)
		},
		removeFavorites(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)
		},
		clearFavorites(state) {
			state.items = []
		}
	}
})

export const { addFavorites, removeFavorites, clearFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;