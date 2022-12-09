import {configureStore} from "@reduxjs/toolkit";
import navbarLeftSlice from "../redux-features/navbarLeftSlice";

export const reduxStore = configureStore({
    reducer: {
        navbarLeft: navbarLeftSlice,
    },
});