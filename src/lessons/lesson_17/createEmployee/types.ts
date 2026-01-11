export interface CreateEmployeeFormValues {
  name: string
  surname: string
  age: string
  job_position: string
}

export const CREATE_EMPLOYEE_INITIAL_VALUES: CreateEmployeeFormValues = {
  name: "",
  surname: "",
  age: "",
  job_position: "",
}

export enum CREATE_EMPLOYEE_FORM_VALUES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  "JOB POSITION" = "job_position",
}
