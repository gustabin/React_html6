import "./App.css";
import imagen0 from "./images/rey_atanagildo.png";
import imagen1 from "./images/rey_sisebuto.png";
import { useRef } from "react";
import UseState from "./UseState";
import UseStateContador from "./UseStateContador";
import UseStateSumador from "./UseStateSumador";
import UseStateAficiones from "./UseStateAficiones";
import UseStateConversor from "./UseStateConversor";
import UseProps from "./UseProps";
import MapFilterFind from "./images/MapFilterFind";
import UseEffectFetch from "./UseEffectFetch";
import ApiSpread from "./ApiSpread";
import ApiRecorrer from "./ApiRecorrer";
import ApiListarSpread from "./ApiListarSpread";

function App() {
  const cambio = 23.16;
  const refCaja = useRef();
  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML > 7) {
      e.target.style.backgroundColor = "red";
    }
    if (e.target.innerHTML > 9) {
      e.target.innerHTML = 1;
      e.target.style.backgroundColor = "white";
    }
  };
  const convertir = () => {
    refCaja.current.innerHTML = refCaja.current.innerHTML * cambio;
  };
  const cambiar = (j) => {
    if (j.target.src.includes("atanagildo")) {
      j.target.src = imagen1;
      // alert("Es Atanagildo");
    } else {
      // alert("Es Sisebuto");
      j.target.src = imagen0;
    }
  };
  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value;
  };
  return (
    <>
      <ApiListarSpread />
      <ApiRecorrer />
      <ApiSpread />
      <UseEffectFetch />
      <MapFilterFind />
      <UseProps />
      <UseStateConversor />
      <UseStateAficiones />
      <UseStateSumador />
      <UseStateContador />
      <UseState />
      <div className="cajaWrap">
        <div ref={refCaja} className="caja" onClick={incrementar}>
          1
        </div>
        <button onClick={convertir}>Aceptar</button>
        <div className="imagenCambiar">
          <img onClick={cambiar} src={imagen0} alt={imagen0} />
        </div>
        <input onChange={lectura} className="campo" />
      </div>
    </>
  );
}

export default App;
