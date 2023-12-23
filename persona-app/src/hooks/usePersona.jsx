import { useState } from "react";

export function usePersona() {
  const [persona, setPersona] = useState({});
  console.log(persona);
  return { persona: persona, setPersona };
}