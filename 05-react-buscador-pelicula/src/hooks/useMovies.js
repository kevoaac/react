import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    console.log('getMovies')

    if (search === previusSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previusSearch.current = search

      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
    , [search])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies

  }, [sort, movies])//si cambia sort o movies se vuelve a ejecutar


  //return { movies, loading, error, getMovies }
  return { movies: sortedMovies, getMovies }
}