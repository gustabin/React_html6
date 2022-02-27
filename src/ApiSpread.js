import React, { useEffect, useState } from "react";

function ApiSpread() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=3";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        lectura.results.map((persona) => {
          setDatos((e) => [
            ...e,
            <div key={persona.email}>
              <div>
                {persona.name.first} {persona.name.last}
              </div>
              <div>
                <img
                  className="imagenEmpleado"
                  src={persona.picture.large}
                  alt={persona.picture.large}
                />
              </div>
            </div>,
          ]);
        });
      })
      .catch(() => console.log("Se ha producido un error"));
  }, []);

  return (
    <>
      <h2>ApiSpread</h2>
      <h3>Varios Empleados:</h3>
      {datos}
    </>
  );
}

export default ApiSpread;
