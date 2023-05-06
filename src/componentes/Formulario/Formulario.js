import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
// import Campo from "../CampoTexto/index"
// array function
const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo,actualizarTitulo] = useState("");
  const [color,actualizarColor] = useState("");
  
  const { registrarColaborador,crearEquipo } = props

  //funcion que va gestionar tomar el envio de los datos cuando se da clic en el boton crear
  const manejarEnvio = (e) => {
    // preventDefault -> para que no se recarge la página
    // puede llamarse evento ,event o e
    e.preventDefault();
    console.log("Manejar el envio");
    //creamos un objetos a partir de los valores que enviamos
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosAEnviar);
  }
 //funcion que va gestionar tomar el envio de los datos cuando se da clic en el boton registrar equipo
  const manejarNuevoEquipo = (e) => {
    // preventDefault -> para que no se recarge la página
    // puede llamarse evento ,event o e
    e.preventDefault();
    // le enviamos lo que queremos 
    // enviamos los dos valores como un objeto
    // ColorPrimario es la llave del ojeto
    crearEquipo( { titulo, colorPrimario: color } )
  }
  return <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
          valor={equipo} 
          actualizarEquipo={actualizarEquipo} 
          equipos= {props.equipos}/>
        <Boton>
          Crear
        </Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar título"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en hexadecimal"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton>
           Registrar Equipo
        </Boton>
     </form>
    </section>
}

// exportar por defecto el componente formulario
export default Formulario;
