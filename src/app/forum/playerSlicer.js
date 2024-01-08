import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    playerInfos: []
}

export const playerInfoSlice = createSlice({
    name: 'playerInfo',
    initialState,
    reducers: {
        addPlayerInfo: (state, action) => {
            const info = {
                playerId: nanoid(),
                playerName: action.payload.playerName,
                playerNumber: action.payload.playerNumber,
            }
                state.playerInfos.push(info)
        },

        removePlayerInfo: (state, action) => {
            state.playerInfos = state.playerInfos.filter((infos) => infos.playerId !== action.payload)
        },

        updatePlayerScore: (state,action) => {
            const playerScore = action.payload.playerScore
            const lastIndex = state.playerInfos.length-1
            state.playerInfos[lastIndex].playerScore = playerScore

        },
    }
})



export const {addPlayerInfo, removePlayerInfo, updatePlayerScore} = playerInfoSlice.actions
export default playerInfoSlice.reducer