import { createSlice } from "@reduxjs/toolkit";
export const variables = createSlice({
	name: "variable",
	initialState: {
		DateSelect:"",
	},
	reducers: {
		variableState: (state, action) => {
			state.DateSelect = action.payload ;
		
		},
	},
});
export const { variableState } = variables.actions;

export default variables.reducer;
