import React from "react";
import Actividad1 from "./Actividad1";
import Actividad2 from "./Actividad2";
import Actividad3 from "./Actividad3";
import Actividad4 from "./Actividad4";

const MapFilterFind = () => {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];
  return (
    <>
      <h2>Actividad4</h2>
      <div className="actividad4">
        <Actividad4 reyes={reyes} />
      </div>
      <h2>Actividad3</h2>
      <div className="actividad3">
        <Actividad3 reyes={reyes} />
      </div>
      <h2>Actividad2</h2>
      <div className="actividad2">
        <Actividad2 reyes={reyes} />
      </div>
      <h2>Actividad1</h2>
      <div className="actividad">
        <Actividad1 reyes={reyes} />
      </div>
    </>
  );
};

export default MapFilterFind;
