import styled from "styled-components";

export const UserContainer = styled.main`
  background-color: #5a2d82;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 43em;

  @media (max-width: 900px) {
    height: 35em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 2rem;
`;

export const Input = styled.input`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 5px;
  border-style: none;
  box-shadow: 0 2px 7px #888888;

  @media (max-width: 900px) {
    width: auto;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #370f53;
  border-radius: 0.5em;
  padding: 10px;
  border: none;
`;
