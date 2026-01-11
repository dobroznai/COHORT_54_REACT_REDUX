import { Employee } from "store/redux/employee/types"

export interface CardProps {
  employeeData: Employee
  onDelete?: () => void
}
