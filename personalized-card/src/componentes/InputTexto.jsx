import '../estilos/InputTexto.css';

function InputTexto({ cambiarTexto }) {
  return (
    <div className="contenedor-input">
      <input type="text" placeholder='Ingrese el texto' onChange={ cambiarTexto } />
    </div>
  );
}

export default InputTexto;