import React, { useState } from "react";

const UseStateContador = () => {
  const [contador, setContador] = useState(0);
  const aumentar = () => {
    setContador(contador + 1);
  };
  const disminuir = () => {
    setContador(contador - 1);
  };
  const restablecer = () => {
    setContador(0);
  };
  return (
    <>
      <h2>Contador con useState</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={restablecer}>Restablecer</button>
      <h3>{contador}</h3>
    </>
  );
};

export default UseStateContador;
