import { createSlice } from '@reduxjs/toolkit'

export const addItemSlice = createSlice({
  name: 'item',
  initialState: {
    value: [],
    
  },
  reducers: {
    addValues: (state,{payload}) => {
      
      state.value.push(payload)
    },
    
    
    
  },
})

// Action creators are generated for each case reducer function
export const { addValues } = addItemSlice.actions

export default addItemSlice.reducer