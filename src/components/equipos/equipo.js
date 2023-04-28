import "./equipos.css"
import Colaborador from "../colaborador/colaborador"

const Equipo = (props) => {
    //Destructuracion 
    const {colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores} = props
    //quito props.datos antes de colorPrimario, colorSecundario, titulo
    const fondo = {
        backgroundColor: colorSecundario
    }
    return <>
    {
    colaboradores.length > 0 &&
    <section className="equipo" style={fondo} >
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
           {
            colaboradores.map( (colaborador, index) => <Colaborador 
            datos={colaborador} 
            key={colaborador.index}
            colorPrimario={colorPrimario}/>)
           }
        </div>

    </section>
}
    </>
}

export default Equipo