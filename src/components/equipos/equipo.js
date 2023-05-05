import "./equipos.css"
import Colaborador from "../colaborador/colaborador"

const Equipo = (props) => {
    //Destructuracion 
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const {colaboradores, deleteColaborador} = props;
    //quito props.datos antes de colorPrimario, colorSecundario, titulo
    const fondo = {
        backgroundColor: colorSecundario
    }
    return <>
    {
    colaboradores.length > 0 && 
    <section className="equipo" style={fondo} >
        <input
        type="color"
        className="input-color"
        value={colorSecundario}
        onChange={(evento) => {
            actualizarColor(evento.target.value, titulo);
        }}
        >
        </input>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
           {
            colaboradores.map( (colaborador, index) => <Colaborador 
            datos={colaborador} 
            key={colaborador.index}
            colorPrimario={colorPrimario}
            deleteColaborador={deleteColaborador}/>)
           }
        </div>

    </section>
}
    </>
}

export default Equipo