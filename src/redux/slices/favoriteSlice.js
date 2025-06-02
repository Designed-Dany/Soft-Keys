import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	active: false
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
		},
		activeFavorites(state, action) {
			state.active = state.items.some((item) => item.id === action.payload);
		}
	}
})

export const { addFavorites, removeFavorites, clearFavorites, activeFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;