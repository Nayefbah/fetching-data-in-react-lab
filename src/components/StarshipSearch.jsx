import { useState } from 'react'

const StarshipSearch = ({ fetchData }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(searchTerm)
    setSearchTerm('')
  }

  return (
    <section>
      <h2>Search Starships</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search by Name</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter starship name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}

export default StarshipSearch
