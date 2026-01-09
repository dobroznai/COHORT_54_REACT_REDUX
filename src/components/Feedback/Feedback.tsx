import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import Button from "components/Button/Button"

import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCount,
  Count,
} from "./styles"

function Feedback() {
  const dispatch = useAppDispatch()

  const likes = useAppSelector(feedbackSliceSelectors.likes)
  const dislikes = useAppSelector(feedbackSliceSelectors.dislikes)

  const onLike = () => {
    dispatch(feedbackSliceActions.like(1))
  }
  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike(1))
  }
  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCount>
          <Button name="Like" onClick={onLike} />
          <Count className="countLike">{likes}</Count>
        </ButtonWithCount>
        <ButtonWithCount>
          <Button name="Dislike" onClick={onDislike} />
          <Count className="countDislike">{dislikes}</Count>
        </ButtonWithCount>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
