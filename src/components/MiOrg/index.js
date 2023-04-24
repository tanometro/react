import { useState } from "react"

import "./miOrg.css"

const MiOrg = (props ) => {
    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }
    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="./img/add.png" alt="Imagen Mi Org" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg