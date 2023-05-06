import "./Colaborador.css"
import { AiFillCloseCircle,AiOutlineHeart,AiFillHeart } from "react-icons/ai"


const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    //condicion ? verdadero: false

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}


        </div>
    </div>
} 
// forma estática
//const Colaborador = () => {
//     return <div className="colaborador">
//         <div className="encabezado">
//             <img src="https://github.com/FatimaVC.png" alt="FatimaVC" />
//         </div>
//         <div className="info">
//             <h4>Fatima Villegas</h4>
//             <h5>Instructor</h5>
//         </div>
//     </div>
// } 

export default Colaborador