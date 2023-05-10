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
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo   } = props

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

    const manejarNuevoEnvio = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color} );
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
                Crear ya
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEnvio} >
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
            titulo="Titulo" 
            placeholder="Ingresa titulo" 
            required
            valor={titulo} 
            setValor={actualizarTitulo}
            />
            <CampoTexto 
            titulo="Color" 
            placeholder="Ingresa color"
            required 
            valor={color} 
            setValor={actualizarColor}/>
            <Boton>
                Crear ya
            </Boton>
        </form>
    </section>
}

export default Formulario