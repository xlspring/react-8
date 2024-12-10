import {createSlice} from "@reduxjs/toolkit";

const logoSlice = createSlice({
	name: "logo",
	initialState: "./logo.png",
	reducers: {
		setLogo(state, action) {
			state = action.payload;
		}
	}
})

export const { setLogo } = logoSlice.actions;
export default logoSlice.reducer;