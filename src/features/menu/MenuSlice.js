import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../../api/Songs";

const initialState = songs;

const MenuSlice = createSlice({
   name: 'menu',
   initialState,
   reducers: {
      allSong(state, action) {
         return state = action.payload
      },
      changeYoungSong(state, action) {
         return state = action.payload.filter(
            item => item.category === 'young'
         )
      },
      changeRapSong(state, action) {
         return state = action.payload.filter(
            item => item.category === 'rap'
         )
      },
   }
})

export const { allSong, changeYoungSong, changeRapSong } = MenuSlice.actions

export default MenuSlice.reducer

