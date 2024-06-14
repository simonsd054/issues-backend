import styled from "styled-components"

const Nav = styled.nav`
  background: green;
`

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 40px;
`

const ListItem = styled.li`
  font-size: 16px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`

export default function Navbar() {
  const createIssue = async () => {
    const newIssue = {
      title: "New Issue",
      description: "New Issue description",
    }

    const response = await fetch("http://localhost:5000/issues", {
      method: "POST",
      body: JSON.stringify(newIssue),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const issue = await response.json()

    console.log(issue)
  }

  return (
    <Nav>
      <List>
        <ListItem>Home</ListItem>
        <ListItem onClick={createIssue}>Create Issue</ListItem>
      </List>
    </Nav>
  )
}
