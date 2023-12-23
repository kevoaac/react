import { useContext } from "react";
import { PersonaContext } from "../context/persona";

function Persona() {
  const { setPersona, persona } = useContext(PersonaContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // const newValue =
    //   name === "edad"
    //     ? parseInt(value, 10)
    //     : name === "pais" || name === "estado"
    //       ? { id: parseInt(value, 10) } : value;

    let newValue = value;
    if (name === "edad") newValue = parseInt(value, 10);
    if (name === "pais" || name === "estado") newValue = { id: parseInt(value, 10) }

    setPersona((prevPersona) => ({
      ...prevPersona,
      [name]: newValue
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/personas/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(persona)
    }).then(() => {
      console.log('Persona agregada ->');
      console.log(persona);

    })
  }
  return (
    <div className="w-2/6">
      <form noValidate autoComplete="off" onSubmit={handleSubmit} onChange={handleChange}
        className="flex flex-col gap-2 p-5 bg-gray-600 rounded-md">
        <h1 className="text-left">Add Persona</h1>
        <input name="nombre" type="text" placeholder="Nombre" />
        <input name="apellido" type="text" placeholder="Apellido" />
        <input name="edad" type="number" placeholder="Edad" />
        <input name="pais" type="number" placeholder="Pais" />
        <input name="estado" type="number" placeholder="Estado" />
        <button className="bg-blue-400 max-w-fit px-4 py-2 rounded-md shadow-lg">Enviar</button>
      </form>
    </div>
  );
}

export default Persona;