import { createContext, useState } from "react";

export const PersonaContext = createContext();

// eslint-disable-next-line react/prop-types
export const PersonaProvider = ({ children }) => {
  const [persona, setPersona] = useState({});
  return (
    <PersonaContext.Provider value={{
      persona, setPersona
    }}>
      {children}
    </PersonaContext.Provider>
  );
};