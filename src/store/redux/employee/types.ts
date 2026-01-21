export interface Employee {
  id: string
  name: string
  surname: string
  age: string
  job_position: string
}

export interface EmployeeSliceState {
  employees: Employee[]
}
