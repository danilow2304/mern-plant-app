export default function PlantCard({ plant, onEdit, onDelete }) {
  const rows = [
    ['Sunlight', plant.sunlight],
    ['Soil', plant.soil],
    ['Water', plant.water],
    ['Height', plant.height],
    ['Blooms', plant.bloomSeason],
    ['Native range', plant.nativeRange],
    ['Wildlife', plant.wildlifeBenefits],
  ].filter(([, v]) => v);

  return (
    <div className="card plant">
      {plant.image && <img src={plant.image} alt={plant.name} />}
      <h3>{plant.name}</h3>
      {plant.scientificName && <em>{plant.scientificName}</em>}
      {plant.description && <p>{plant.description}</p>}
      <ul>
        {rows.map(([label, value]) => (
          <li key={label}>
            <strong>{label}:</strong> {value}
          </li>
        ))}
      </ul>
      <div className="actions">
        <button onClick={() => onEdit(plant)}>Edit</button>
        <button className="danger" onClick={() => onDelete(plant)}>
          Delete
        </button>
      </div>
    </div>
  );
}
