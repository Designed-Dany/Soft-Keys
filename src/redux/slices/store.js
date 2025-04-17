import { configureStore } from "@reduxjs/toolkit";
import filter from './filterSlice';
import search from './searchSlice'

export const store = configureStore({
	reducer: {
		filter, search,
	}
})