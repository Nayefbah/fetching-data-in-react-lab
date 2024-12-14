import { useState, useEffect } from 'react'
import './App.css'
import * as starshipService from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'

const App = () => {
  const [starships, setStarships] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = async (searchTerm = '') => {
    try {
      setLoading(true)
      const data = await starshipService.getStarships(searchTerm)
      setStarships(data.results || [])
      setError('')
    } catch {
      setError('Failed to fetch starships. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <h1>Star Wars Starships</h1>
      <StarshipSearch fetchData={fetchData} />
      {error ? (
        <p className="error">{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <StarshipList starships={starships} />
      )}
    </main>
  )
}

export default App
