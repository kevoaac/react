import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);//Extraemos el valor del campo de texto que ingreso el usuario
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);//agregarTarea()  , onSubmit() es un estandar para decir que hacer cuando se intente enviar
  };

  return (
    <form
      className="tarea-formulario"
      onSubmit={manejarEnvio} >
      <input
        className='tarea-input'
        type="text"
        placeholder="Escribe una tarea"
        name='texto'
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;