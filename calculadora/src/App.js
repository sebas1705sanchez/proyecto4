import './App.css';
import freecc from "./imagenes/freecodecamp-logo.png";
import Boton from './componentes/Boton';
function App() {
  return (
    <div className="App">
      <div className='freecc-logo-contenedor'>
        <img
        src={freecc}
        className='freecc-logo'
        alt='FreeCC Logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Boton>1</Boton>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
