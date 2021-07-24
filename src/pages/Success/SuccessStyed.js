import styled from "styled-components";

export const Container = styled.main`
  background-color: #5a2d82;
  height: 43rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 5rem;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #370f53;
  border-radius: 0.5em;
  padding: 10px;
  border: none;
  font-size: 4rem;
  margin-left: 10px;
`;
