const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <h3>{starship.name || 'Unknown Name'}</h3>
      <p>
        <strong>Class:</strong> {starship.starship_class || 'N/A'}
      </p>
      <p>
        <strong>Manufacturer:</strong> {starship.manufacturer || 'N/A'}
      </p>
      <p>
        <strong>Model:</strong> {starship.model || 'N/A'}
      </p>
    </div>
  )
}

export default StarshipCard
