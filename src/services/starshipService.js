const BASE_URL = `https://swapi.dev/api/starships`

export const getStarships = async (searchTerm = '') => {
  try {
    const response = await fetch(`${BASE_URL}?search=${searchTerm}`)
    if (!response.ok) throw new Error('Failed to fetch starships')
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
