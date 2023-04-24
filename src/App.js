import { useState } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Formulario from './components/formulario/formulario.js';
import MiOrg from './components/MiOrg';

function App() {
  const [mostrarForm,actualizarMostrar] = useState(true)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }
  //es lo mismo que {mostrarForm === true ? <Formulario/> : <div></div> }//
  return (
    <div>
      <Header />
      {mostrarForm && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
