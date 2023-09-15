import { useState } from 'react'
import './App.css'
import Testimonio from './componentes/Testimonio'

function App() {

  return (
    <div className="App">
      <Testimonio 
        nombre = 'Emma'
        pais = 'Suecia'
        cargo = 'Ingeniera de Software'
        empresa = 'Spotify'
        testimonio = '"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
      />
      <Testimonio 
        nombre = 'Shawn Wang'
        pais = 'Singapur'
        cargo = 'Ingeniera de Software'
        empresa = 'Amazon'
        testimonio = '"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
      />
      
    </div>
  )
}

export default App
