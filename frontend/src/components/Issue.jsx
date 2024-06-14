import styled from "styled-components"

const Card = styled.div`
  border: 1px solid green;
  border-radius: 10px;
  min-height: 200px;
  min-width: 300px;
  overflow: hidden;
  display: flex;
  flex-direction:column;
  
  &:hover {
    box-shadow: 0 0 5px 5px rgb(62, 231, 62);
  }
`

const CardTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  background-color: grey;
  color: #ffffff;

`

const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export default function Issue({issue}) {
  console.log(issue)
  return <Card>
    <CardTitle>
      {issue.title}
    </CardTitle>
    <CardDescription>
      {issue.description}
    </CardDescription>
  </Card>
}
