import React, { useEffect, useState } from "react";

const ApiListarSpread = () => {
  const [chiste, setChiste] = useState([]);
  useEffect(() => {
    const url = "https://api.icndb.com/jokes";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        lectura.value.map((chistes) => {
          setChiste((e) => [
            ...e,
            <div className="reyMap" key={chistes.id}>
              {chistes.id} {chistes.joke}
            </div>,
          ]);
        });
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <h2>ApiListarSpread</h2>
      {chiste}
    </>
  );
};

export default ApiListarSpread;
