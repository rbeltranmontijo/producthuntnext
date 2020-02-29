import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error
} from "../components/ui/Formulario";

import firebase from "../firebase";

// Validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: ""
};

const CrearCuenta = () => {
  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);
  const { nombre, email, password } = valores;

  async function crearCuenta() {
    console.log("Creando cuenta...");
    console.log(firebase);
    try {
      await firebase.registrar(nombre, email, password);
    } catch (error) {
      console.error("Hubo un error", error.message);
    }
  }

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Crear cuenta
          </h1>
          <Formulario onSubmit={handleSubmit}>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.nombre && <Error>{errores.nombre}</Error>}
            <Campo>
              <label htmlFor="nombre">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.email && <Error>{errores.email}</Error>}
            <Campo>
              <label htmlFor="nombre">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Tu password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.password && <Error>{errores.password}</Error>}
            <InputSubmit type="submit" value="Crear Cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
};
export default CrearCuenta;
