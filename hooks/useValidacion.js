import React, { useState, useEffect } from "react";

const useValidacion = (stateInicial, validar, fn) => {
  const [valores, guardarValores] = useState(stateInicial);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(erroes).length === 0;
      if (noErrores) {
        fn(); // Fn = Funcion que se ejecuta en el componente
      }
      guardarSubmitForm(false);
    }
  }, []);

  // Funcion que se ejecuta conforme el usuario esribe algo
  const handleChange = e => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value
    });
  };

  // Funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = e => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
    guardarSubmitForm(true);
  };
  return {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange
  };
};

export default useValidacion;
