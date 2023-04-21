import { useState } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Formulario from './components/formulario/formulario.js';
import MiOrg from './components/MiOrg';

function App() {
  const [mostrarForm,actualizarMostrar] = useState(true)
  return (
    <div>
      <Header />
      <Formulario/>
      <MiOrg/>
    </div>
  );
}

export default App;
