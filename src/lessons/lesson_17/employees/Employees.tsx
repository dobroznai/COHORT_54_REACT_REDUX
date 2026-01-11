import Button from "components/Button/Button"
import Card from "lessons/lesson_17/card/Card"

import { PageWrapper, Cards, ButtonControl } from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  employeeSliceActions,
  employeeSliceSelectors,
} from "store/redux/employee/employeeSlice"

function Employees() {
  const dispatch = useAppDispatch()

  const employees = useAppSelector(employeeSliceSelectors.employees)

  const deleteEmployee = (id: string) => {
    dispatch(employeeSliceActions.deleteEmployee(id))
  }
  const deleteAllEmployees = () => {
    dispatch(employeeSliceActions.deleteAllEmployees())
  }

  return (
    <PageWrapper>
      <Cards>
        {employees.map(employee => (
          <Card
            key={employee.id}
            employeeData={employee}
            onDelete={() => deleteEmployee(employee.id)}
          />
        ))}
      </Cards>
      {!!employees.length && (
        <ButtonControl>
          <Button name="Delete All" isRed onClick={deleteAllEmployees} />
        </ButtonControl>
      )}
    </PageWrapper>
  )
}

export default Employees
