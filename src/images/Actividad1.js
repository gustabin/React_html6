import React from "react";

const Actividad1 = ({ reyes }) => {
  const url = "http://www.html6.es/img/rey_";
  const resultado = reyes.map((e) => (
    <div key={e.nombre} className="reyMap">
      <span className="rojo">{e.nombre.toUpperCase()}</span> ha comido{" "}
      {e.reinado * e.vacasComidas * 365} vacas en sus {e.reinado} años de
      reinado
      <img
        src={url + e.nombre.toLowerCase() + ".png"}
        alt={e.nombre.toLowerCase()}
      />
    </div>
  ));
  return <>{resultado}</>;
};

export default Actividad1;
