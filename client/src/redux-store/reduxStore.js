import {configureStore} from "@reduxjs/toolkit";
import navbarLeftSlice from "../redux-features/navbarLeftSlice";
import selectPairsSlice from "../redux-features/selectPairsSlice";
import selectNavbarPage from "../redux-features/selectNavbarPageSlice.js";

export const reduxStore = configureStore({
    reducer: {
        navbarLeft: navbarLeftSlice,
        selectPairs: selectPairsSlice,
        selectPage: selectNavbarPage,
    },
});
