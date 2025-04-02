import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import keyboard from './keyboard/slice.ts';
export const store = configureStore({
	reducer: {
		keyboard
	},
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store;