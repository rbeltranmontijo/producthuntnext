import React from "react";
import Link from "next/link";

const Navegacion = () => {
  return (
    <nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/">
        <a>Populares</a>
      </Link>
      <Link href="/">
        <a>Nuevo Producto</a>
      </Link>
    </nav>
  );
};

export default Navegacion;
