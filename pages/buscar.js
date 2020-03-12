import Layout from "../components/layout/Layout";
import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import useProductos from '../hooks/useProductos'
import DetallesProducto from "../components/layout/DetallesProducto";

const Buscar = () => {
  const router = useRouter()
  const {query: {q}} = router
  console.log(q)

  // Todos los productos
  const {productos} = useProductos('creado')
  const [resultado, guardarResultado] = useState([])

  useEffect(() => {
   const busqueda = q.toLocaleLowerCase()
   const filtro = productos.filter(producto => {
     return (
       producto.nombre.toLocaleLowerCase().includes(busqueda) || 
       producto.descripcion.toLocaleLowerCase().includes(busqueda) ||
       producto.empresa.toLocaleLowerCase().includes(busqueda)
     )
   })
   guardarResultado(filtro)
  }, [q, productos])

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {resultado.map(producto => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Buscar;
