import React, { useState } from "react";
import '../estilos/Boton.css';

function Boton({ children ,cambiarColor }) {

  return (
    <>
      <button
        className="boton-color-random"
        onClick={cambiarColor}
      >
        {children}
      </button>
    </>
  );
}

export default Boton;