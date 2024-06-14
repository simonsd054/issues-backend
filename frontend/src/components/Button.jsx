import styled from "styled-components"

const Button = styled.button`
  background: green;
  height: 32px;
  min-width: 120px;
  outline: none;
  border: 1px solid green;
  border-radius: 4px;
  color: white;

  &:hover {
    background: #0b9b0b;
    cursor: pointer;
  }
`

export default Button;