import './App.css'
import { useState } from 'react';
import Boton from './componentes/Boton';
import CuadroColor from './componentes/CuadroColor';
import InputTexto from './componentes/InputTexto';

function App() {

  const [color, setColor] = useState({});
  const [colorTexto, setColorTexto] = useState({ color: "black" });

  const [imagen, setImagen] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');

  const generarColor = () => {
    const color = {
      backgroundColor: "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")",
    };
    console.log(color);
    setColor(color);
  };


  const generarColorTexto = () => {
    const blackORwhite = colorTexto.color === 'white' ? 'black' : 'white';
    const nuevoColorTexto = {
      color: blackORwhite,
    };
    console.log(nuevoColorTexto);
    setColorTexto(nuevoColorTexto);
  };



  const cambiarImagen = (e) => {
    console.log(e.target.value);
    setImagen(e.target.value);
  };

  const cambiarUsuario = (e) => {
    console.log(e.target.value);
    setUsuario(e.target.value);
  };

  const cambiarCorreo = (e) => {
    console.log(e.target.value);
    setCorreo(e.target.value);
  };



  return (
    <div className='contenedor'>
      <CuadroColor color={color} colorTexto={colorTexto} imagen={imagen} usuario={usuario} correo={correo} />
      <section className="contenedor-inputs">

        <h2>URL de imagen</h2>
        <div>
          <InputTexto cambiarTexto={cambiarImagen} />
        </div>

        <h2>Usuario</h2>
        <div>
          <InputTexto cambiarTexto={cambiarUsuario} />
        </div>

        <h2>Correo</h2>
        <div>
          <InputTexto cambiarTexto={cambiarCorreo} />
        </div>

      </section>
      <section className="contenedor-botones">
        <Boton cambiarColor={generarColor}>Color Color Fondo</Boton>
        <Boton cambiarColor={generarColorTexto}>Color Color Texto</Boton>
      </section>

    </div>
  )
}

export default App
