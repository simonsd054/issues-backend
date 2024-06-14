import styled from "styled-components"

import Button from "./Button"

const Card = styled.div`
  border: 1px solid green;
  border-radius: 10px;
  min-height: 200px;
  min-width: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

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

const UtilSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`

export default function Issue({ issue }) {

  const updateIssue = async () => {
    const updatedIssue = {
      title: "New Issue",
      description: "New Issue description",
    }

    const response = await fetch(`http://localhost:5000/issues/${issue.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedIssue),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const res = await response.json()

    console.log(res)
  }

  const deleteIssue = async () => {

    const response = await fetch(`http://localhost:5000/issues/${issue.id}`, {
      method: "DELETE",
    })

    const res = await response.json()

    console.log(res)
  }


  return (
    <Card>
      <CardTitle>{issue.title}</CardTitle>
      <CardDescription>{issue.description}</CardDescription>
      <UtilSection>
        <Button onClick={updateIssue}>Edit</Button>
        <Button onClick={deleteIssue}>Delete</Button>
      </UtilSection>
    </Card>
  )
}
