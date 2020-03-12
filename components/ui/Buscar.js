import React, {useState} from "react";
import styled from "@emotion/styled";
import Router from 'next/router'

const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;
`;

const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscador.png");
  background-repeat: no-repeat;
  position: absolute;
  right: 2rem;
  top: 1px;
  background-color: white;
  border: none;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`;

const FormPosition = styled.form`
  position: relative;
`;


const Buscar = () => {
  const [busqueda, guardarBusqueda] = useState('')

  const buscarProducto = (e) => {
    e.preventDefault()
    console.log('buscando...', busqueda)

    if(busqueda.trim() === '') return

    // redireccionar a '/buscar'
    Router.push({
      pathname: '/buscar',
      query: {q: busqueda}
    })
  }
  
  return (
    <FormPosition onSubmit={buscarProducto}>
      <InputText type="text" placeholder="Buscar Productos" onChange={e => guardarBusqueda(e.target.value)}/>
      <InputSubmit type="submit">Buscar</InputSubmit>
    </FormPosition>
  );
};

export default Buscar;
