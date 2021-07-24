import React from "react";
import * as S from "./HomeStyled";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  function Client() {
    history.push("/users");
  }

  function Products() {
    history.push("/products");
  }

  return (
    <S.HomeContainer>
      <S.Label>Cadastrar</S.Label>
      <S.ButtonsContainer>
        <S.Button onClick={Client}>Clientes</S.Button>
        <S.Button onClick={Products}>Produtos</S.Button>
      </S.ButtonsContainer>
    </S.HomeContainer>
  );
}
