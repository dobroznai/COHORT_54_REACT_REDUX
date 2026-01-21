import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

import Button from "components/Button/Button"
import Input from "components/Input/Input"

import { FormContainer, InputsContainer } from "./styles"
import {
  type CreateEmployeeFormValues,
  CREATE_EMPLOYEE_FORM_VALUES,
  CREATE_EMPLOYEE_INITIAL_VALUES,
} from "./types"

import { v4 } from "uuid"
import { useAppDispatch } from "store/hooks"
import { employeeSliceActions } from "store/redux/employee/employeeSlice"
import { Employee } from "store/redux/employee/types"

function CreateEmployee() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    [CREATE_EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
      .trim()
      .required("Name is required")
      .min(2, "Name field should contain minimum 2 characters")
      .max(50, "Name field should contain maximum 50 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
      .trim()
      .required("Surname is required")
      .max(15, "Surname field should contain maximum 15 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
      .trim()
      .required("Age is required")
      .min(1, "Age field should contain minimum 1 character")
      .max(3, "Age field should contain maximum 3 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES["JOB POSITION"]]: Yup.string()
      .trim()
      .max(30, "Job position field should contain maximum 30 characters"),
  })

  const formik = useFormik<CreateEmployeeFormValues>({
    initialValues: CREATE_EMPLOYEE_INITIAL_VALUES,
    validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, helpers) => {
      const newEmployee: Employee = {
        id: v4(),
        name: values[CREATE_EMPLOYEE_FORM_VALUES.NAME],
        surname: values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME],
        age: values[CREATE_EMPLOYEE_FORM_VALUES.AGE],
        job_position: values[CREATE_EMPLOYEE_FORM_VALUES["JOB POSITION"]],
      }
      dispatch(employeeSliceActions.addEmployee(newEmployee))
      helpers.resetForm()
      navigate("/employees")
      alert(
        `User ${values[CREATE_EMPLOYEE_FORM_VALUES.NAME]} ${
          values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]
        } successfully created`,
      )
    },
  })

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="name_id"
          name={CREATE_EMPLOYEE_FORM_VALUES.NAME}
          type="text"
          placeholder="John"
          label="Name*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.NAME]}
        />
        <Input
          id="surname-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.SURNAME}
          type="text"
          placeholder="Johnson"
          label="Surname*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]}
        />
        <Input
          id="age-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.AGE}
          type="text"
          placeholder="25"
          label="Age*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.AGE]}
        />
        <Input
          id="job-id"
          name={CREATE_EMPLOYEE_FORM_VALUES["JOB POSITION"]}
          type="text"
          placeholder="QA"
          label="Job Position"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES["JOB POSITION"]]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES["JOB POSITION"]]}
        />
      </InputsContainer>
      <Button type="submit" name="Create" />
    </FormContainer>
  )
}

export default CreateEmployee
