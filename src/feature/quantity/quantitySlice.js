import { createSlice } from '@reduxjs/toolkit'

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState: {
    value:1,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
  }
})
export const { increment,decrement } = quantitySlice.actions

export default quantitySlice.reducer