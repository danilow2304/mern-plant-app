import PlantCard from './PlantCard.jsx';

export default function PlantList({ plants, onEdit, onDelete }) {
  if (plants.length === 0) return <p>No plants found.</p>;
  return (
    <div className="list">
      {plants.map((p) => (
        <PlantCard key={p._id} plant={p} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
