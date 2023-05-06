import { useState } from 'react';
import { v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  // se quiere que el estado mostrarFormulario se inicia en true
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }])
  const[equipos, actualizarEquipos]= useState([
    //React se va dar cuenta si existe un cambio en la información
    // y automaticamente deberia actualizar la interfaz
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  // console.log(uuid())
  // Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra
  const cambiarMostrar = (id) => {
    actualizarMostrar(!mostrarFormulario, id)
  }

   //Registrar colaborador
   const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    // se crea una copia de los datos actuales
    // y despuès agregamos colaborador
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar Colaborador
  //necesitamos que esta función viaje
  // del componente al componente equipo
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador",id)
    // estamos llendo al arreglo de nuevoColaboradores ,lo filtramos 
    // vamos cada colaborador
    // si el id es diferente al id que estamos clikeando
    // filter nos regresa un nuevo arreglo sin modificar el anterior
    const nuevosColaboradores =  colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)

  }

  //Actualizar color de equipo
  //Nos va ayudar para recibir estos dos datos
  //para que se actualizen los colores
  const actualizarColor= (color , id) => {
    console.log("Actualizar: ",color,id)
    // esta función se va iterar por cada equipo
    const equiposActualizados = equipos.map((equipo) => {
      // Si equipo.titulo es igual a titulo lo actualiza sino regresa
      // el equipo en ese colorPrimario es igual alñ color nuevo
      if(equipo.id ===id){
        equipo.colorPrimario = color;
       }
       return equipo
    })
    // Hay que indicar a react que hay nuevos datos 
    actualizarEquipos (equiposActualizados)
  }

  //Crear equipo
  //se va recibir el objeto "nuevoEquipo"
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    //dentro de actualizar equipo llamamaos a una copia del arreglo equipos
    // despues le agregamos un objeto que tome una copia de nuevoequipos
    //luego le agregamos el id con la función uiid
    // de esta forma para que nos agregue un identificador
    actualizarEquipos([...equipos, {...nuevoEquipo , id: uuid()}])
  }

  // vamos a recibir el id del colaborador del
  // que queremos dar like
  const like = (id) => {
    console.log("like" ,id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
    // si es el mismo usuatio al que le estamos dando like
    // si es true se convierte en false o viceversa
     if(colaborador.id === id) {
      colaborador.fav = !colaborador.fav
     }
     return colaborador
   })
    actualizarColaboradores(colaboradoresActualizados)
  }

  //Lista de equipos
  
  return (
    <div className="App">
      {/* {Header()}
      <Header></Header> */}
      <Header />
      {/* {mostrarFormulario === true ? <Formulario /> : <div></div> } */}
      {/* {mostrarFormulario? <Formulario /> : <></> } */}
      {mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo={crearEquipo}
      />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        // este map crea un equipo por cada elemneto
        // siempre que se trabaja con mapa se debe usar key
        equipos.map((equipo) => <Equipo 
          datos={equipo}
          key={equipo.titulo}
          //que se filtre cada colaborador => y que se regresen los colaboradores de equipo
          // sea igual al equipo titulo
          colaboradores={colaboradores.filter ( colaborador => colaborador.equipo === equipo.titulo)}
          //lo que está dentro de llaves hace referencia a la funció eliminarColaborador
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
          //este mètodo va regresar l componente equipo
          // el equipo que se recibe lo mandamos despues 
          // en nuestro componente equipo 
          //en la prop datos
          //tenemos que enviarle una llave única
  
      }

      <Footer/>


    </div>
  );
}

export default App;
