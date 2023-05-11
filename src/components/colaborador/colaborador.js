import "./colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, deleteColaborador, like} = props
    return <div className="colaborador ">
        <AiFillCloseCircle onClick={() => deleteColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5> 
            {fav ? <AiFillHeart color="red" onCLick={() => like(id)}/> : <AiOutlineHeart onCLick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador