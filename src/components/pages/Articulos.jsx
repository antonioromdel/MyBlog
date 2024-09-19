import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion.jsX";
import { Listado } from "./Listado";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getArticles = async () => {
    const { datos, load } = await Peticion(Global.urlGetArticles, "GET");

    if (datos.mensaje === "success") {
      setArticulos(datos.result);
    }

    setCargando(load);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {cargando ? (
        "Cargando..."
      ) : (
        articulos.length >= 1 ?  <Listado 
                                  articulos={articulos} 
                                  setArticulos={setArticulos}/> :  <h2>No hay artículos para mostrar</h2>
      ) 
      }
    </>
  );
};
