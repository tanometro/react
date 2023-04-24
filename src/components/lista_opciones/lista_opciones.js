import "./lista_opciones.css"

const ListaOpciones = (props) => {
    const equipos = [
        "Programación",
        "Front-end",
        "Data Science",
        "Dev-ops",
        "UX y Diseño",
        "Móvil",
        "Innovación y gestión"
    ]

    const manejarCambio = (e) => {
        props.setEquipo(e.target.value);

    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disable defaultValue="" hidden >Seleccionar equipo</option>
            {equipos.map( (equipos, index) => <option key={index}>{equipos}</option> )}
        </select>
    </div>
} 

export default ListaOpciones