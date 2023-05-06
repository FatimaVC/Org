import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion
    // porps.datos va sacar los valores de cada dato
    // y se cree cada variable
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    //destructurar las funciones
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    //para usar tipos de estilo debemos quitar el guión y usar mayuscula  al iniciar la segunda palabra
    //llamamos el color secundario de cada equipo
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

   //  console.log(colaboradores.length > 0)

    const estiloTitulo = { borderColor: colorPrimario}
   
   return <>
      { 
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
              <input
                type="color"
                className="input-color"
                value={colorPrimario}
               //actualizarColor va recibir el nuevo color y el titulo de equipo
               onChange={(evento) => {
                  actualizarColor(evento.target.value, id)
              }}
                  
               />
              
              <h3 style={estiloTitulo}>{titulo}</h3>
              <div className="colaboradores">
                  {
                     // podemos regresar un colaborador por cada elemento que existe
                     colaboradores.map((colaborador, index) => <Colaborador
                     datos={colaborador}
                     key={index}
                     colorPrimario={colorPrimario}
                     eliminarColaborador={eliminarColaborador}
                     like={like}
                     //recibir en mi equipo y mandar eliminar Colaborador a 
                     // a cada uno de los colaboradores
                   />)
                  }
               </div>
            </section>
       }
   </>
}

export default Equipo