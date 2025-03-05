import { createSlice } from "@reduxjs/toolkit";

const portCharacter = localStorage.getItem("portCharacter");
const fiberLowGravity = JSON.parse(localStorage.getItem("fiberLowGravity"));

const initialState = {
    gravity: 0.4,
    lowGravity: fiberLowGravity ? fiberLowGravity : false,
    character: portCharacter ? portCharacter : "Mage"
}

const settingsSlice = createSlice({
    name: "settingsSlice",
    initialState,
    reducers: {
        setGravity: (state, action) => {
            state.gravity = action.payload;
        },
        setLowGravity: (state, action) => {
            state.lowGravity = action.payload;
            localStorage.setItem("fiberLowGravity", action.payload);
        },
        setCharacter: (state, action) => {
            state.character = action.payload;
            localStorage.setItem("portCharacter", action.payload);
        }
    }
})

export const { setGravity, setCharacter, setLowGravity } = settingsSlice.actions;
export default settingsSlice.reducer;