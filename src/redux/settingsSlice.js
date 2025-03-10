import { createSlice } from "@reduxjs/toolkit";

const portCharacter = localStorage.getItem("portCharacter");
const fiberLowGravity = localStorage.getItem("fiberLowGravity");
const theme = localStorage.getItem("jack-theme");
const fiberControls = localStorage.getItem('fiber-controls')

const initialState = {
    gravity: 0.4,
    lowGravity: fiberLowGravity === "true",
    character: portCharacter ? portCharacter : "Robot",
    theme: theme ? theme : "jack-light",
    controls: fiberControls === null ? true : fiberControls === "true"
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
            localStorage.setItem("fiberLowGravity", action.payload.toString());
        },
        setControls: (state, action) => {
            state.controls = action.payload;
            localStorage.setItem("fiber-controls", action.payload.toString());
        },
        setCharacter: (state, action) => {
            state.character = action.payload;
            localStorage.setItem("portCharacter", action.payload);
        },
        setPortTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("jack-theme", action.payload);
        }
    }
})

export const { setGravity, setCharacter, setLowGravity, setPortTheme, setControls } = settingsSlice.actions;
export default settingsSlice.reducer;