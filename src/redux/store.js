import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import gateReducer from './gateSlice'
import { scoreApi } from "./scoreApi";
import { projectApi } from "./projectApi";
import { emailApi } from "./emailApi";

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        gate: gateReducer,
        [scoreApi.reducerPath]: scoreApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [emailApi.reducerPath]: emailApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(scoreApi.middleware, projectApi.middleware, emailApi.middleware)
})