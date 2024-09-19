import { useState } from "react"

export const userForm = (objetoInicial = {}) => {

    const [formulario, setFormulario] = useState(objetoInicial)

    const serializarFormulario = (formulario) => {

        const formData = new FormData(formulario)
        const objetoCompleto = {}

        for(let [name, value] of formData) {
            objetoCompleto[name] = value
        }

        return objetoCompleto

    }

    const enviado = (e) => {
        e.preventDefault()

        let articulo = serializarFormulario(e.target)
        setFormulario(articulo)

    }

    const cambiado = ({target}) => {
        const {name, value} = target
        
        setFormulario({
            ...formulario,
            [name]:value
        })
    }

    return {
        formulario,
        enviado,
        cambiado
    }

}