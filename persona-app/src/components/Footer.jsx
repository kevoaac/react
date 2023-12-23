import { useContext } from "react";
import { PersonaContext } from "../context/persona";

function Footer() {
  const { persona } = useContext(PersonaContext);
  return (
    <div className=" bg-blue-950 fixed text-left left-0 bottom-0 px-2 py-1 rounded-lg">
      {
        JSON.stringify(persona)
      }
    </div>
  );
}

export default Footer;