import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceState } from "./types"

const feedbackInitialState: FeedbackSliceState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    like: create.reducer(
      (state: FeedbackSliceState, action: PayloadAction<number>) => {
        state.likes += action.payload
      },
    ),
    dislike: create.reducer(
      (state: FeedbackSliceState, action: PayloadAction<number>) => {
        state.dislikes += action.payload
      },
    ),
    resetResults: create.reducer(() => feedbackInitialState),
  }),

  selectors: {
    likes: (state: FeedbackSliceState) => {
      return state.likes
    },
    dislikes: (state: FeedbackSliceState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
