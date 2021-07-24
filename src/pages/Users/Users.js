import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./UsersStyled";

export default function Example() {
  const history = useHistory();
  const [query, setQuery] = useState({
    id: "",
    name: "",
    email: "",
    cel: "",
    address: "",
  });

  const updateQuery = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleChangeUpdateAddObject = (event) => {
    event.preventDefault();
    if (
      query.id !== "" &&
      query.name !== "" &&
      query.email !== "" &&
      query.cel !== "" &&
      query.address !== ""
    ) {
      localStorage.setItem(`query${query.id}`, JSON.stringify(query));
      history.push("/success");
    }
  };

  return (
    <>
      <S.UserContainer>
        <S.Form onClick={handleChangeUpdateAddObject}>
          <S.Label>Cadastro de Usuário</S.Label>
          <S.Input
            type="text"
            placeholder="Cpf"
            name="id"
            onChange={updateQuery}
          />
          <S.Input
            type="text"
            placeholder="Nome Completo"
            name="name"
            onChange={updateQuery}
          />
          <S.Input
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={updateQuery}
          />
          <S.Input
            type="text"
            placeholder="Telefone"
            name="cel"
            onChange={updateQuery}
          />
          <S.Input
            type="text"
            placeholder="Endereço Completo"
            name="address"
            onChange={updateQuery}
          />
          <S.Button type="buttom">Cadastrar</S.Button>
        </S.Form>
      </S.UserContainer>
    </>
  );
}
