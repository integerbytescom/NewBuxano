//показ меню по умолчнаию
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    show:"",
};

export const navbarLeftSlice = createSlice({
    name: 'navbarLeft',
    initialState,
    reducers: {
        //для смены видимоти меню
        setShow: (state) => {
            state.show = state.show?"":"open"
        }
    }
})

export const {setShow} = navbarLeftSlice.actions
export default navbarLeftSlice.reducer