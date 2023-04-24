import { useState } from "react"
import "./campo_texto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    const [valor, setValor] = useState("")
    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto;