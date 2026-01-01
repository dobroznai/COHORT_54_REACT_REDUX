import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"
import Button from "components/Button/Button"

import { CounterWrapper, ButtonControl, Count } from "./Styles"

function Counter() {
  // хук useAppDispatch не принимает в себя аргументы, он просто возвращает нам функцию dispatch,
  // которая передает action in redux store. Потом на переданный action запускается нужный нам reducer
  const dispatch = useAppDispatch()

  // Забираем значение из redux store, затем передаем значение в нужные места в JSX,
  // таким образом подписываемся на изменения в redux store
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    // counterSliceActions.plus() - actionCreator - функция, которая возвращает нам action
    // action - это обьект, который из 2 пар ключ/значение
    // 1 - type - строка (type action), по которому у нас вызывается reducer. exmpl : "Counter/plus"
    // COUNTER - name slice
    // plus - name reducer
    // 2 - payload - это данные, которые вы хотите передать иъ компонента в reducer
    const plusAction = counterSliceActions.plus()
    // console.log(plusAction)
    dispatch(plusAction)
    // более короткая запись
    // dispatch(counterSliceActions.plus())
  }
  // minus - actionCreator
  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide(3))
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
