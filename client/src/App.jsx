import { useEffect, useState } from 'react';
import { getPlants, createPlant, updatePlant, deletePlant } from './api';
import PlantForm from './components/PlantForm.jsx';
import PlantList from './components/PlantList.jsx';

export default function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null); // plant being edited, or null
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function load(term = search) {
    try {
      setError('');
      setPlants(await getPlants(term));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const t = setTimeout(() => load(search), 250); // debounce search
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  async function handleSave(data) {
    try {
      setError('');
      if (editing) await updatePlant(editing._id, data);
      else await createPlant(data);
      setEditing(null);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(plant) {
    if (!window.confirm(`Delete "${plant.name}"?`)) return;
    try {
      setError('');
      await deletePlant(plant._id);
      if (editing?._id === plant._id) setEditing(null);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container">
      <header>
        <h1>🌿 Native Plant App</h1>
        <p>React → Express API → MongoDB</p>
      </header>

      {error && <div className="error">{error}</div>}

      <PlantForm
        key={editing?._id || 'new'}
        initial={editing}
        onSave={handleSave}
        onCancel={() => setEditing(null)}
      />

      <input
        className="search"
        type="search"
        placeholder="Search plants by name or description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <PlantList
          plants={plants}
          onEdit={(p) => {
            setEditing(p);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
