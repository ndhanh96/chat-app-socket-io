import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../features/usersSlice';

export default configureStore({
  reducer: {
    users: usersSlice
  }
})