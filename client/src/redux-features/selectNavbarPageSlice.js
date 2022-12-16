//выбранная пара
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page:{
        link:"",
        title:"",
    },
};

export const selectNavbarPageSlice = createSlice({
    name: 'selectPage',
    initialState,
    reducers: {
        //для смены страницы
        setPage: (state,action) => {
            state.page = action.payload;
        }
    }
})

export const {setPage} = selectNavbarPageSlice.actions
export default selectNavbarPageSlice.reducer
