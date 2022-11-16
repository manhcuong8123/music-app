import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   id: 0,
   name: 'Loading......',
   author: 'Author ...',
   path: '',
   image: 'https://zmp3-photo.zadn.vn/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg',
   category: 'rap',
   active: false,
}

const DashboardSlice = createSlice({
   name: 'Dashboard',
   initialState,
   reducers: {
      clickSong(state, action) {
         return state = action.payload
      },
      nextSong(state, action) {
         return state = action.payload
      },
      prevSong(state, action) {
         return state = action.payload
      }
   }
})

export const { nextSong, prevSong, clickSong } = DashboardSlice.actions

export default DashboardSlice.reducer