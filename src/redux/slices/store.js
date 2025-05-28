import { configureStore } from "@reduxjs/toolkit";
import favorites from './favoriteSlice';
import filter from './filterSlice';
import search from './searchSlice';

export const store = configureStore({
	reducer: {
		filter, search, favorites
	}
})