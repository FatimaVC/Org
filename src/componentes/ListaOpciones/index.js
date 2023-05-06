import "./ListaOpciones.css"
const ListaOpciones = (props) => {
//    Metodo map -> arreglo.mao( (equipo,index) ->> {
//       return <option></option>
// index es la posicion del arreglo
//    })
    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y  Gestión"
    // ]

    // se puede crear una constante manejar cambio de lo que viene sienod nuestro
    // select que cuando se selecione o modifique una opcion se muestre la respectiva opcion con su valor
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones"> 
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
                    {/* //cada vez que se regrese un elemento en un mètodo map debe 
                    //debe tener un identificador ùnico
                    //react tiene que tener un identificador ùnico que le vaya ayudar cuando va a tener un evento */}
            </select>
    </div>
}

export default ListaOpciones