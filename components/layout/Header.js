import React from "react";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

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

const Header = () => {
  return (
    <HeaderStyled>
      <ContenedorHeader>
        <div>
          <Link href="/">
            <a>
              <Logo>P</Logo>
            </a>
          </Link>

          <Buscar />
          <Navegacion />
        </div>
        <div>
          <p>Hola Robin</p>
          <button type="button">Cerrar Sesión</button>
          <Link href="/">
            <a>Login</a>
          </Link>
          <Link href="/">
            <a>Crear Cuenta</a>
          </Link>
        </div>
      </ContenedorHeader>
    </HeaderStyled>
  );
};

export default Header;
