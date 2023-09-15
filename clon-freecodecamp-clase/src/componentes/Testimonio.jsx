import React from "react"
import '../hojas-de-estilos/testimonio.css'

class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img
          className='img-testimonio'
          src={this.props.imagen}
          alt={`Foto de ${this.props.nombre}`} />

        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{this.props.nombre}</strong> de {this.props.pais}</p>
          <p className="cargo-testimonio">{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className="texto-testimonio">{this.props.testimonio}</p>
        </div>
      </div>
    );

  }
}

export default Testimonio