import { configureStore } from '@reduxjs/toolkit';
import cameraReducer from '../features/camera/cameraSlice';

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
  },
});
