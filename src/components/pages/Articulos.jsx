import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const url = Global.urlGetArticles

  const getArticles = async () => {

    const response = await fetch(url, {
      method:"GET"
    })
    const datos = await response.json()
    
    if(datos.mensaje === "success"){
      setArticulos(datos.result)
    }

  }

  useEffect( () => {
    
    getArticles()

  }, []);

  return (
    <>
      {
        articulos.length >= 1 ? (

          articulos.map((articulo) => {
            return (
              <article className="articulo-item" key={articulo._id}>
                <div className="mask">
                  <img src="../../public/imagen.jpg" alt="Imagen" />
                </div>
                <div className="datos">
                  <h3 className="title">{articulo.title}</h3>
                  <p className="description">{articulo.content}</p>
    
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
                </div>
              </article>
            );
          })

        ) : (
            <h2>No hay artículos para mostrar</h2>
        )

      }
    </>
  );
};
