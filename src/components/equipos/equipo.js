import "./equipos.css"
import Colaborador from "../colaborador/colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion 
    const {colorPrimario, colorSecundario, titulo, id } = props.datos;
    const {colaboradores, deleteColaborador, updateColor} = props;
    //quito props.datos antes de colorPrimario, colorSecundario, titulo
    const fondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    return <>
    {
    colaboradores.length > 0 && 
    <section className="equipo" style={fondo} >
        <input
        type="color"
        className="input-color"
        value={hexToRgba(colorPrimario, 0.6)}
        onChange={(evento) => {
            updateColor(evento.target.value, id);
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