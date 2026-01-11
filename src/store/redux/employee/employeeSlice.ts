import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import { Employee, EmployeeSliceState } from "./types"

const employeeInitialState: EmployeeSliceState = {
  employees: [],
}

export const employeeSlice = createAppSlice({
  name: "EMPLOYEE",
  initialState: employeeInitialState,
  reducers: create => ({
    addEmployee: create.reducer(
      (state: EmployeeSliceState, action: PayloadAction<Employee>) => {
        state.employees.push(action.payload)
      },
    ),
    deleteEmployee: create.reducer(
      (state: EmployeeSliceState, action: PayloadAction<string>) => {
        state.employees = state.employees.filter(
          employee => employee.id !== action.payload,
        )
      },
    ),
    deleteAllEmployees: create.reducer(() => {
      return employeeInitialState
    }),
  }),
  selectors: {
    employees: state => state.employees,
  },
})

export const employeeSliceActions = employeeSlice.actions
export const employeeSliceSelectors = employeeSlice.selectors
