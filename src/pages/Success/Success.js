import React from "react";
import * as S from "./SuccessStyed";
import { useHistory } from "react-router-dom";

export default function Success() {
  const history = useHistory();

  function handleClick() {
    history.push("/users");
  }

  function handleClick2() {
    history.push("/products");
  }

  return (
    <S.Container>
      <S.Label>Cadastro feito com sucesso</S.Label>
      <S.ButtonsContainer>
        <S.Button type="submit" onClick={handleClick}>
          Clientes
        </S.Button>
        <S.Button type="submit" onClick={handleClick2}>
          Produtos
        </S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
}
