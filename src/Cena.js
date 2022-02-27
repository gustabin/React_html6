import React from "react";

const Cena = ({ nombre, color, precio, setTotal }) => {
  const ruta = "http://www.html6.es/img/rey_";
  const imagen = `${ruta}${nombre.toLowerCase()}.png`;
  const comprar = (elemento) => {
    setTotal((e) => e + precio);
    elemento.target.parentNode.parentNode.parentNode.style.display = "none";
  };
  return (
    <>
      <div className="rey" style={{ backgroundColor: color }}>
        <h2>{nombre}</h2>
        <img src={imagen} alt={imagen} />
        <div className="titulo">Precio:</div>
        <div className="precio">
          {precio}$
          <div>
            <button onClick={comprar}>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cena;
