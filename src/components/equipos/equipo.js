import "./equipos.css"


const Equipo = (props) => {
    //Destructuracion 
    const {colorPrimario, colorSecundario, titulo} = props.datos
    //quito props.datos antes de colorPrimario, colorSecundario, titulo
    const fondo = {
        backgroundColor: colorSecundario
    }
    return <section className="equipo" style={fondo} >
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores"></div>

    </section>
}

export default Equipo