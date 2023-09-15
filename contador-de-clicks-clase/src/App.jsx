import './App.css'
import reactLogo from './imagenes/react-logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };

    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);

  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="react-logo-contenedor">
            <img src={reactLogo} alt="react logo" className="react-logo" />
          </div>

          <div className="contenedor-principal">
            <Contador
              numClicks={this.state.numClicks}
            />
            <Boton
              texto='Click'
              esBotonDeClick={true}
              manejarClick={this.manejarClick}
            />
            <Boton
              texto='Reiniciar'
              esBotonDeClick={false}
              manejarClick={this.reiniciarContador}
            />
          </div>
        </div>

      </>
    );
  }
}


export default App
