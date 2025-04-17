import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryId: 0,
	sort: {
		name: 'Популярности',
		sortProperty: 'rating'
	}
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
			console.log(action);
		},
		setSortId(state, action) {
			state.sort = action.payload
			console.log(action);

		}
	}
})

export const { setCategoryId, setSortId } = filterSlice.actions;

export default filterSlice.reducer;