import React, { useState } from "react";
import * as S from "./ProductsStyled";
import { useHistory } from "react-router-dom";

export default function Products() {
  const history2 = useHistory();

  const [query, setQuery] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
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
    if (
      query.id !== "" &&
      query.title !== "" &&
      query.price !== "" &&
      query.description !== "" &&
      query.category !== "" &&
      query.image !== ""
    ) {
      localStorage.setItem(`query${query.id}`, JSON.stringify(query));
      history2.push("/success");
    }
  };

  return (
    <S.Container>
      <S.Form onClick={handleChangeUpdateAddObject}>
        <S.Label>Cadastro de Produto</S.Label>
        <S.Input
          type="text"
          placeholder="Número"
          name="id"
          onChange={updateQuery}
        />
        <S.Input
          type="text"
          placeholder="Produto"
          name="title"
          onChange={updateQuery}
        />
        <S.Input
          type="text"
          placeholder="Preço"
          name="price"
          onChange={updateQuery}
        />
        <S.Input
          type="text"
          placeholder="Descrição"
          name="description"
          onChange={updateQuery}
        />
        <S.Input
          type="text"
          placeholder="Categoria"
          name="category"
          onChange={updateQuery}
        />
        <S.Input type="file" name="image" onChange={updateQuery} />
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Container>
  );
}
