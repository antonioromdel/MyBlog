import React from 'react'
import { useState } from 'react'
import { userForm } from '../../hooks/useForm'
import { Peticion } from '../../helpers/Peticion.jsX'
import { Global } from '../../helpers/Global'

export const Crear = () => {

  const {formulario, enviado, cambiado} = userForm({})
  const [resultado, setResultado] = useState("No enviado")

  const guardarArticulo = async (e) => {
    e.preventDefault()

    let nuevoArticulo = formulario

    const {datos, load} = await Peticion(Global.urlCreateArticle, "POST", nuevoArticulo)

    if(datos.status === "Succes"){
      setResultado("Guardado")
      document.querySelector(".formulario").reset()
    } else {
      setResultado("error")
    }
  }

  return (
    <>
      <div className="jumbo">

        <h1>Crear Artículo</h1>
        <p>Formulario para crear un artículo</p>
        <strong>{resultado === "Guardado" ? "Articulo guardado con exito" : ""} </strong>
        <strong>{resultado === "error" ? "Articulo no enviado. Sentimos las molestias" : ""} </strong>

        <form action="" className="formulario" onSubmit={guardarArticulo}>

          <div className="form_group">
            <label htmlFor='title' >Titulo</label>
            <input type="text" name="title" onChange={cambiado}/>
          </div>

          <div className="form_group">
            <label htmlFor='content' >Contenido</label>
            <textarea name="content" onChange={cambiado}></textarea>
          </div>

          <div className="form_group">
            <label htmlFor='file' >Imagen</label>
            <input type="file" name='file'/>
          </div>

          <input type="submit" value="Guardar" className="button" />

        </form>
        
      </div>
    </>
  )
}
