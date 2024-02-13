import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
}

export const playerInfoSlice = createSlice({
    name: 'playerInfo',
    initialState,
    reducers: {
        login: (state) => {
            state.status = true;
        },
        logout: (state) => {
            state.status = false;
        },
    }
})




export const {login, logout} = playerInfoSlice.actions
export default playerInfoSlice.reducer