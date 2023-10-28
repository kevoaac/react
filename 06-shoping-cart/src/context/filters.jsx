/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

// 1. Crear el contexto
// es el que tenemos que consumir 
export const FilterContext = createContext()

// 2. Crear el provider
//es el que tiene que proveer el contexto
export const FilterProvider = ({ children }) => {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })


  return (
    <FilterContext.Provider value={{
      filters, setFilters
    }}>
      {children}
    </FilterContext.Provider >

  )
}