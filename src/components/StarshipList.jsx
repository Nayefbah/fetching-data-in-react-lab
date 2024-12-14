import StarshipCard from './StarshipCard'

const StarshipList = ({ starships }) => {
  return (
    <section>
      <h2>Starships</h2>
      <p>Number of results: {starships.length}</p>
      <ul className="starship-list">
        {starships.map((starship, index) => (
          <li key={index}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StarshipList
