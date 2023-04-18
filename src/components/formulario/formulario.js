import "./formulario.css"
import CampoTexto from "../campo_texto/campo_texto.js"
import ListaOpciones from "../lista_opciones/lista_opciones.js"


const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa tu nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa tu puesto"/>
            <CampoTexto titulo="Foto" placeholder="Inserta link de foto"/>
            <ListaOpciones/>
        </form>
    </section>
}

export default Formulario