//выбранная пара
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pair:"BTCUSD",
};

export const selectPairsSlice = createSlice({
    name: 'selectPairs',
    initialState,
    reducers: {
        //для смены пары
        setPair: (state,action) => {
            state.pair = action.payload;
        }
    }
})

export const {setPair} = selectPairsSlice.actions
export default selectPairsSlice.reducer
