import React, { useEffect, useState } from "react";

const ApiRecorrer = () => {
  const [chiste, setChiste] = useState("");
  const otro = () => {
    const url = "https://api.icndb.com/jokes/random";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => setChiste(lectura.value.joke))
      .catch(console.log);
  };
  useEffect(() => {
    otro();
  }, []);
  return (
    <>
      <h2>ApiRecorrer</h2>
      {chiste}
      <div>
        <button onClick={otro}>Otro chiste</button>
      </div>
    </>
  );
};

export default ApiRecorrer;
