import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routes from "./routes";
import * as S from "./AppStyled";

function App() {
  return (
    <>
      <S.AppStyled>
        <Header />
        <Routes />
        <Footer />
      </S.AppStyled>
    </>
  );
}

export default App;
