import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './storeSlice/SliceStore'

export default configureStore({
  reducer: {
    counter:CounterSlice,
  },
})