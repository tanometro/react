import "./formulario.css"
import CampoTexto from "../campo_texto/campo_texto.js"
import ListaOpciones from "../lista_opciones/lista_opciones.js"
import Boton from "../boton/boton.js"


const Formulario = () => {
    const manejarEnvio = (e) => {
        e.preventDefault();

    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa tu nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa tu puesto"/>
            <CampoTexto titulo="Foto" placeholder="Inserta link de foto" required/>
            <ListaOpciones/>
            <Boton>
                Crear ya wey
            </Boton>
        </form>
    </section>
}

export default Formulario