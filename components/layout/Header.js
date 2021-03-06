import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase";

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const HeaderStyled = styled.header`
  border-bottom: 2px solid var(--gris3);
  padding: 1rem 0;
`;

const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
`;

const DivContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ParrafoConNombre = styled.p`
  margin-right: 2rem;
`;

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);
  return (
    <HeaderStyled>
      <ContenedorHeader>
        <DivContainer>
          <Link href="/">
            <a>
              <Logo>P</Logo>
            </a>
          </Link>

          <Buscar />
          <Navegacion />
        </DivContainer>
        <DivContainer>
          {usuario ? (
            <>
              <ParrafoConNombre>Hola: {usuario.displayName}</ParrafoConNombre>
              <Boton bgColor="true" onClick={() => firebase.cerrarSesion()}>
                Cerrar Sesión
              </Boton>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </>
          )}
        </DivContainer>
      </ContenedorHeader>
    </HeaderStyled>
  );
};

export default Header;
