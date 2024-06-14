import { useEffect, useState } from "react"
import styled from "styled-components"

import Issue from "../components/Issue"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export default function Issues() {
  const [issues, setIssues] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await fetch("http://localhost:5000/issues")
      const issues = await response.json()
      console.log(issues)
      setIssues(issues)
      setIsLoading(false)
    }
    fetchIssues()
  }, [])

  if (isLoading) {
    return <Wrapper>...</Wrapper>
  }

  if (issues.length === 0) {
    return <Wrapper>No issues found at the moment</Wrapper>
  }

  return (
    <Wrapper>
      {issues.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </Wrapper>
  )
}
