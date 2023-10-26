import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    access_token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload.access_token;
    },
    unSetToken: (state, action) => {
      state.access_token = action.payload.access_token;
    },
  }
})
export const { setToken, unSetToken } = authSlice.actions

export default authSlice.reducer