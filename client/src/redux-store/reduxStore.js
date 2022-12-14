import {configureStore} from "@reduxjs/toolkit";
import navbarLeftSlice from "../redux-features/navbarLeftSlice";
import selectPairsSlice from "../redux-features/selectPairsSlice";

export const reduxStore = configureStore({
    reducer: {
        navbarLeft: navbarLeftSlice,
        selectPairs: selectPairsSlice,
    },
});
