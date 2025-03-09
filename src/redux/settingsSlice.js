import { createSlice } from "@reduxjs/toolkit";

const portCharacter = localStorage.getItem("portCharacter");
const fiberLowGravity = localStorage.getItem("fiberLowGravity");
const theme = localStorage.getItem("jack-theme");

const initialState = {
    gravity: 0.4,
    lowGravity: fiberLowGravity === "true",
    character: portCharacter ? portCharacter : "Robot",
    theme: theme ? theme : "jack-light"
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

export const { setGravity, setCharacter, setLowGravity, setPortTheme } = settingsSlice.actions;
export default settingsSlice.reducer;