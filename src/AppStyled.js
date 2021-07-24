import styled from "styled-components";

export const AppStyled = styled.div`
  min-width: 100vh;
  background-color: #5a2d82;
  font-family: "Fira Sans", sans-serif;
  color: #fff;
  margin: 0 auto;
  max-width: 2000px;

  @media (max-width: 900px) {
    min-width: 0;
  }
`;
