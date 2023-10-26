import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../feature/auth/authSlice'
import cartSlice from '../feature/cart/cartSlice'
import quantitySlice from '../feature/quantity/quantitySlice'
export default configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    quantity: quantitySlice,
  }
})