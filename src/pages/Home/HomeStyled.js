import styled from "styled-components";

export const HomeContainer = styled.main`
  background-color: #5a2d82;
  height: 43rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    height: 35em;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    width: auto;
  }
`;

export const Label = styled.label`
  text-align: center;
  font-size: 5rem;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 4.5rem;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #370f53;
  border-radius: 0.5em;
  padding: 10px;
  border: none;
  font-size: 4rem;
  margin-left: 10px;

  @media (max-width: 900px) {
    font-size: 3.5rem;
    margin-bottom: 10px;
  }
`;
