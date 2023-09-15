import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {//verificamos si la cadena no esta vacia. '':false 'texto':true
      tarea.texto = tarea.texto.trim();//quitamos espacios en blanco
      const tareasActualizadas = [tarea, ...tareas];//generamos un array con la nueva tarea y las anteriores
      //agregamos la nueva tarea al inicio del array
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);//copia, sin la tarea que queremos borrar
    setTareas(tareasActualizadas);//aqui si alteramos el array de tareas
  };

  const completarTarea  = id =>{
    //genera un nuevo arreglo de tareas cambiando la propiedad del objeto seleccionado (id)
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id == id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {

          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}
export default ListaDeTareas;