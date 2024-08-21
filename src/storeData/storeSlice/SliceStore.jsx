import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    value1: [],
    value2: [],
  },
  reducers: {
    storeData: (state,actions)=>{
      state.value= actions.payload
    },
    storeData1: (state,actions)=>{
      state.value1= actions.payload
    },
    storeData2: (state,actions)=>{
      state.value1= actions.payload
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,storeData,storeData1,storeData2 } = counterSlice.actions

export default counterSlice.reducer