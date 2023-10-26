/* eslint-disable react/prop-types */
import { useId, useState } from 'react'
import './Filters.css'

export function Filters({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()


  const handleChangeMinPrice = (event) => {
    //ESTO ESTA MAL
    //DOS FUENTES DE VERDAD
    setMinPrice(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    //ESTO ESTA MAL
    //estamos pasando la función de actializar el estado
    //nativa de react a un componente hijob 
    changeFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Min Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>SmarthPhones</option>
        </select>
      </div>
    </section>
  )
}