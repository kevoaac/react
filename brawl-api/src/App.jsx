import { useState } from 'react'
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState(null)
  const [pokemonFound, setPokemonFound] = useState(false)

  const searchPokemon = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

      if (response.ok) {
        console.log('Pokemon encontrado')
        const data = await response.json()
        setPokemon(data)


      }
      setPokemonFound(response.ok)

    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    searchPokemon(event.target[0].value)
  }

  return (
    <>
      {
        pokemonFound
          ?
          <main>
            <h2>{pokemon.name}</h2>
            <div className='card'>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          </main>
          :
          <main>
            <h2>Pokemon no encontrado</h2>
            <div className='card card-skeleton'></div>
          </main>

      }
      <form onSubmit={handleSubmit}>
        <input placeholder="ingrese ID" />
        <button type="submit">Buscar</button>
      </form>
    </>
  )
}

export default App
