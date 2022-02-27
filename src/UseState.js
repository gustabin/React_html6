import React, { useState } from "react";

const UseState = () => {
  const [nombre, setNombre] = useState("Tabin");

  const cambiar = () => {
    setNombre("Gustavo Arias");
  };
  return (
    <>
      <h2>Me llamo {nombre}</h2>
      <button onClick={cambiar}>Cambiar nombre</button>
    </>
  );
};

export default UseState;
