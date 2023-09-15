import './App.css'
import React from "react"
import Testimonio from './componentes/Testimonio'
import EmmaImg from './imagenes/img-Emma.png'
import ShawnImg from './imagenes/img-Shawn.png'
import SarahImg from './imagenes/img-Sarah.png'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Testimonio
          imagen={EmmaImg}
          nombre='Emma'
          pais='Suecia'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio=<p>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <strong>freeCodeCamp me dio las habilidades</strong> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
        />
        <Testimonio
          imagen={ShawnImg}
          nombre='Shawn Wang'
          pais='Singapur'
          cargo='Ingeniera de Software'
          empresa='Amazon'
          testimonio=<p>"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <strong>freeCodeCamp cambió mi vida.</strong>"</p>
        />
        <Testimonio
          imagen={SarahImg}
          nombre='Sarah Chima'
          pais='Nigeria'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio=<p>"<strong>freeCodeCamp was the gateway to my career</strong> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."</p>
        />
      </div>
    );
  }

}

export default App;
