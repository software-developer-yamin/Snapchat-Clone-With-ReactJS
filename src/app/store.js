import { configureStore } from '@reduxjs/toolkit';
import cameraReducer from '../features/camera/cameraSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
    user: userReducer,
  },
});
