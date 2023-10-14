import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  // recuperar el hecho cada vez que cargue la página
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
