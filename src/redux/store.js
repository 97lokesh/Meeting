import { configureStore } from '@reduxjs/toolkit'
import listReducer from './ListSlice'
export const store = configureStore({
  reducer: {
    list:listReducer
  },
})