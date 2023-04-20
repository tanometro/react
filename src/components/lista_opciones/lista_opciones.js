import "./lista_opciones.css"

const ListaOpciones = () => {
    const equipos = [
        "Programación",
        "Front-end",
        "Data Science",
        "Dev-ops",
        "UX y Diseño",
        "Móvil",
        "Innovación y gestión"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map( (equipos, index) => <option key={index}>{equipos}</option> )}
        </select>
    </div>
} 

export default ListaOpciones