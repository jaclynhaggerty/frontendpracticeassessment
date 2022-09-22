import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    spaces: [],
}

export const spaceSlice = createSlice({
    name: "space",
    initialState,
    reducers: {
        setSpaces: (state, action) => {
            state.spaces = action.payload
        }
    }
})



export const {setSpaces} = spaceSlice.actions;
export default spaceSlice.reducer;