import './App.css'
import reactLogo from './imagenes/react-logo.png'
import Boton from './componentes/boton'
import Contador from './componentes/Contador'
import { useState } from 'react'



function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
    //le pasamos el nuevo valor de numClicks
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <>
      <div className="App">
        <div className="react-logo-contenedor">
          <img src={reactLogo} alt="react logo" className="react-logo" />
        </div>

        <div className="contenedor-principal">
          <Contador
            numClicks={numClicks}
          />
          <Boton
            texto='Click'
            esBotonDeClick={true}
            manejarClick={manejarClick}
          />
          <Boton
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>

    </>
  )
}

export default App
