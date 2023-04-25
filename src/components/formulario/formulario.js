import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campo_texto/campo_texto.js"
import ListaOpciones from "../lista_opciones/lista_opciones.js"
import Boton from "../boton/boton.js"


const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const { registrarColaborador } = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
    registrarColaborador(datosEnviar)
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresa tu nombre" 
            required
            valor={nombre} 
            setValor={actualizarNombre}
            />
            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresa tu puesto"
            required 
            valor={puesto} 
            setValor={actualizarPuesto}
            />
            <CampoTexto 
            titulo="Foto" 
            placeholder="Inserta link de foto" 
            required
            valor={foto} 
            setValor={actualizarFoto}/>
            <ListaOpciones 
            valor={equipo}
            setEquipo={actualizarEquipo }
            equipos={props.equipos}
            />
            <Boton>
                Crear ya wey
            </Boton>
        </form>
    </section>
}

export default Formulario