import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from '../features/dashboard/DashboardSlice';
import MenuReducer from '../features/menu/MenuSlice'

export default configureStore({
   reducer: {
      Dashboard: DashboardReducer,
      menuSong: MenuReducer,
   }
})