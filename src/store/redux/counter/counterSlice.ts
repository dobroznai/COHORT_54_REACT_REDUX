import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import { CounterSliceState } from "./types"

const counterInitialState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  // имя для slice - используется для нахождений событий слайса в redux devtools и создании type в action
  name: "COUNTER",
  // state  в котором мы прописываем значения по умолчанию
  initialState: counterInitialState,
  // reducers - это функция, которая возвращает обьект содержащий функции, которые будут изменять state
  reducers: create => ({
    plus: create.reducer((state: CounterSliceState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count -= 1
    }),
    multiply: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        // PayLoad в action - данные которые мы хотим передать из компонента в reducer
        console.log(action.payload)
        state.count = Number((state.count * action.payload).toFixed(2))
      },
    ),
    divide: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count = Number((state.count / action.payload).toFixed(2))
      },
    ),
  }),

  // прописываем какие именно данные мы хотим отдать компонентам
  selectors: {
    count: (state: CounterSliceState) => {
      return state.count
    },
  },
})
// counterSlice сам создает actions для каждого отдельного reducer
export const counterSliceActions = counterSlice.actions

// selectors - данные, которые мы будем отдавать компонентам, то есть позволять компонентам подписываться на redux store
export const counterSliceSelectors = counterSlice.selectors
