import { useState } from "react"
import "./campo_texto.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion para definir por defecto el typo del campo
    const {type = "text"} = props

    console.log(props.type);
    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo;