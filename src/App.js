import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './components/header/header.js';
import Formulario from './components/formulario/formulario.js';
import MiOrg from './components/MiOrg';
import Equipo from './components/equipos/equipo';
import Footer from './components/footer';

function App() {
  const [mostrarForm,actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front-end",
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
      titulo: "Innovación y gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }

  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id ) {
        equipo.colorPrimario = color;
    }
    return equipo 
  })
  actualizarEquipos(equiposActualizados)
  }
 
  //es lo mismo que {mostrarForm === true ? <Formulario/> : <div></div> }//
  return (
    <div>
      <Header />
      {mostrarForm && <Formulario 
       equipos={equipos.map((equipo) => equipo.titulo )}
       registrarColaborador={registrarColaborador}
       />}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {equipos.map( (equipo) => <Equipo 
      datos={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      deleteColaborador={eliminarColaborador}
      updateColor={actualizarColor}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
