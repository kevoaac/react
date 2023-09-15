import React from "react"
import EmmaImg from '../imagenes/img-Emma.png'
import '../hojas-de-estilos/testimonio.css'

function Testimonio(props){

    return(
      <div className='contenedor-testimonio'>
        <img 
          className='img-testimonio' 
          src={EmmaImg}
          alt='Foto de Emma'/>
        
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{props.nombre}</strong> de {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">{props.testimonio}</p>
        </div>
      </div>
    )
  }
export default Testimonio