import Button from "components/Button/Button"
import { CardWrapper, CardInfo, CardInfoTitle, CardInfoContent } from "./styles"

import { CardProps } from "./types"

function Card({ employeeData: employee, onDelete }: CardProps) {
  return (
    <CardWrapper>
      <CardInfo>
        <CardInfoTitle>Name</CardInfoTitle>
        <CardInfoContent>{employee.name}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Surname</CardInfoTitle>
        <CardInfoContent>{employee.surname}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Age</CardInfoTitle>
        <CardInfoContent>{employee.age}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        {/* Условный рендеринг */}
        {employee?.job_position && <CardInfoTitle>Job Position</CardInfoTitle>}
        <CardInfoContent>{employee?.job_position}</CardInfoContent>
      </CardInfo>

      <Button isRed onClick={onDelete} name="Delete" />
    </CardWrapper>
  )
}
export default Card
