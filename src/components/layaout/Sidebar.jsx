import React from "react";

export const Sidebar = () => {
  return (
    <>
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          
          <form action="">
            <input
              type="text"
              placeholder="Buscar..."
              name="busqueda"
              autoComplete="off"
            />
            <button id="search">Buscar</button>
          </form>
        </div>

        {/* <div className="add">
          <h3 className="title">Añadir Artículo</h3>
          <form >
            <input
              required
              type="text"
              placeholder="Titulo"
              id="titulo"
              name="titulo"
            />
            <textarea
              required
              name="descripcion"
              id="descripcion"
              placeholder="Descripción"
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div> */}
      </aside>
    </>
  );
};
