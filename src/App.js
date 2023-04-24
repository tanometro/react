import { useState } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Formulario from './components/formulario/formulario.js';
import MiOrg from './components/MiOrg';
import Equipo from './components/equipos/equipo';

function App() {
  const [mostrarForm,actualizarMostrar] = useState(false)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front-end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]
  //es lo mismo que {mostrarForm === true ? <Formulario/> : <div></div> }//
  return (
    <div>
      <Header />
      {mostrarForm && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo}/>)}
    </div>
  );
}

export default App;
