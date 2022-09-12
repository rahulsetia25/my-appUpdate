import { configureStore } from '@reduxjs/toolkit'
import counterReducer   from '../feature/addItemSlice'
export default configureStore({
    reducer:counterReducer 
  })