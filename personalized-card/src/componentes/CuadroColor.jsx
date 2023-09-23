import React from "react";
import '../estilos/CuadroColor.css'

function CuadroColor({ color, colorTexto, imagen, usuario, correo }) {
  imagen = imagen ? imagen : 'https://scontent.fuio29-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=siafXG2yUqwAX9GA0NQ&_nc_ht=scontent.fuio29-1.fna&oh=00_AfA4iJr9PK11QmJ7sePimEFgu6Nuh6T9U9XsSe68mkgv-A&oe=65314378';
  usuario = usuario ? usuario : 'Usuario';
  correo = correo ? correo : 'Correo';

  return (
    <main className="cuadro-color" style={color}>
      <div className="contenedor-imagen">
        <img src={imagen} alt="imagen" />
      </div>
      <div className="contenedor-texto">
        <h1 className="usuario" style={colorTexto}>{usuario}</h1>
        <h2 className="correo" style={colorTexto}>{correo}</h2>
      </div>
    </main>
  );
}

export default CuadroColor;