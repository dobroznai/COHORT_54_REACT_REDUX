import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

import CreateEmployee from "./createEmployee/CreateEmployee"
import Employees from "./employees/Employees"
import { ROUTES } from "lessons/lesson_17/constants/routes"

import Layout from "./layout/Layout"
import { PageWrapper } from "./styles"

function Lesson_17() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<CreateEmployee />} />
            <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
            <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
            <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          </Routes>
        </Layout>
      </PageWrapper>
    </BrowserRouter>
  )
}

export default Lesson_17
