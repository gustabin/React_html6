import React from "react";

const Actividad3 = ({ reyes }) => {
  const resultado = reyes.find(
    (e) => e.nombre.substring(0, 1) === "e" || e.nombre.substring(0, 1) === "E"
  );
  //   console.log(resultado);
  return (
    <>{resultado === undefined ? "No se ha encontrado" : resultado.nombre}</>
  );
};

export default Actividad3;
