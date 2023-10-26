import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    product: [],
    grandtotal:0,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product.push(action.payload.product);
      state.grandtotal += action.payload.product.subtotal
    },
    removeProduct: (state, action) => {
      const i = action.payload.index
      state.grandtotal -= state.product[i].subtotal
      state.product.splice(i, 1);
    },
    addquantity: (state, action) => {
      const i = action.payload.index
      state.product[i].q += 1
      state.grandtotal -= state.product[i].subtotal
      state.product[i].subtotal = state.product[i].q * state.product[i].product_price
      state.grandtotal += state.product[i].subtotal
    },
    removequantity: (state, action) => {
      const i = action.payload.index
      state.product[i].q -= 1
      state.grandtotal -= state.product[i].subtotal
      state.product[i].subtotal = state.product[i].q * state.product[i].product_price
      state.grandtotal += state.product[i].subtotal
    },
  }
})
export const { setProduct, removeProduct,addquantity,removequantity } = cartSlice.actions

export default cartSlice.reducer