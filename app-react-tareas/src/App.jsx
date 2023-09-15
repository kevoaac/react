import './App.css'
import reactLogo from './imagenes/react-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {

  return (
    <div className="aplicacion-tareas">
      <div className="react-logo-contenedor">
        <img src={reactLogo} alt="logo de react" className="react-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
