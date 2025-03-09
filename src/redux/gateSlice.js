import { createSlice } from "@reduxjs/toolkit";

const challengeToken = localStorage.getItem('challengeToken') || false;

const initialState = {
    projectsShow: false,
    contactGate: false,
    aboutGate: false,
    projectGate: false,
    raceGate: false,
    raceStart: false,
    startTimer: false,
    raceTime: 0,
    elapsedTime: 0,
    endTime: 0,
    challengeComplete: challengeToken ? challengeToken : false
}


export const gateSlice = createSlice({
    name: 'gate',
    initialState,
    reducers: {
        setContactGate: (state, action) => {
            state.contactGate = action.payload
        },
        setAboutGate: (state, action) => {
            state.aboutGate = action.payload       
        },
        setProjectGate: (state, action) => {
            state.projectGate = action.payload;
        },
        setRaceGate: (state, action) => {
            state.raceGate = action.payload;
        },
        setRaceStart: (state, action) => {
            state.raceStart = action.payload;
        },
        startTimer: (state, action) => {
            state.startTimer = action.payload;
        },
        setEndTime: (state, action) => {
            state.endTime = action.payload
        },
        setElapsedTime: (state, action) => {
            state.elapsedTime = action.payload
        },
        setChallengeComplete: (state, action) => {
            state.challengeComplete = action.payload
            localStorage.setItem('challengeToken', action.payload)
        },
        setProjectsShow: (state, action) => {
            state.projectsShow = action.payload
        }
    }
})

export const { setContactGate, setAboutGate, setProjectGate, setRaceGate, setRaceStart, startTimer, setEndTime, raceTime, setElapsedTime, setChallengeComplete, setProjectsShow } = gateSlice.actions;
export default gateSlice.reducer;