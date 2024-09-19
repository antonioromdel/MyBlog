import React from "react";

export const Listado = ({articulos, setArticulos}) => {

  return articulos.map((articulo) => {

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
  });
};
