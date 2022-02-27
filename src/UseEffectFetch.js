import React, { useEffect, useState } from "react";

function UseEffectFetch() {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  useEffect(() => {
    const url = "https://randomuser.me/api/";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        setNombre(
          `${lectura.results[0].name.first} ${lectura.results[0].name.last}`
        );
        setImagen(lectura.results[0].picture.large);
      })
      .catch(() => console.log("Se ha producido un error"));
  }, []);

  return (
    <>
      <h2>UseEffectFetch</h2>
      <h3>Empleado/a del mes:</h3>
      {nombre}
      <div>
        <img className="imagenEmpleado" src={imagen} alt={imagen} />
      </div>
    </>
  );
}

export default UseEffectFetch;
