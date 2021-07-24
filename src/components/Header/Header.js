import React from "react";
import * as S from "./HeaderStyled";
import logo from "./logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <S.Navbar>
        <S.NavSection>
          <S.Parag>
            Página de cadastro de usuário e produtos para o desafio 2 da Hiring
            Coders
          </S.Parag>
        </S.NavSection>
        <S.SectionLogo>
          <S.Figure>
            <img src={logo} alt="logo netshoes" />
          </S.Figure>
        </S.SectionLogo>
      </S.Navbar>
      <S.SectionMail>
        <S.Icon>
          <FaMapMarkerAlt></FaMapMarkerAlt>
        </S.Icon>
        <S.SubTitle>Enviamos para o todo o Brasil</S.SubTitle>
      </S.SectionMail>
    </>
  );
};

export default Header;
