import styled from "styled-components";
export const StyledHeader = styled.header`

  background-color :${(props) => props.bg};
  margin: 10px;
  padding: 20px;
  h1 {
    color: green;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`
