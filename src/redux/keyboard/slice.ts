import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { KeyboardProps, SearchKeyboardParams, Status, keyboardSliceState } from './types';


const initialState: keyboardSliceState = {
	items: [],
	status: Status.LOADING,
}

export const keyboardsSlice = createSlice({
	name: 'keyboard',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchKeyboard.pending, (state) => {
			state.status = Status.LOADING;
			state.items = [];
		})
		builder.addCase(fetchKeyboard.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = Status.SUCCESS;
		})
		builder.addCase(fetchKeyboard.rejected, (state) => {
			state.status = Status.ERROR;
			state.items = [];
		})
	}
})

export const fetchKeyboard = createAsyncThunk<KeyboardProps[], SearchKeyboardParams>('keyboard/fetchKeyboardStatus',
	async (params) => {
		const { order, sortBy, category, search, currentPage } = params
		const { data } = await axios.get<KeyboardProps[]>(
			`https://679f328924322f8329c309b8.mockapi.io/items?&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
		);
		return data
	}
)

export const { setItems } = keyboardsSlice.actions;

export default keyboardsSlice.reducer;