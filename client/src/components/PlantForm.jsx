import { useState } from 'react';

const FIELDS = [
  ['name', 'Name *'],
  ['scientificName', 'Scientific name'],
  ['sunlight', 'Sunlight'],
  ['soil', 'Soil'],
  ['water', 'Water'],
  ['height', 'Height'],
  ['bloomSeason', 'Bloom season'],
  ['nativeRange', 'Native range'],
  ['wildlifeBenefits', 'Wildlife benefits'],
  ['image', 'Image URL'],
];

const EMPTY = Object.fromEntries([...FIELDS.map(([k]) => [k, '']), ['description', '']]);

export default function PlantForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ? { ...EMPTY, ...initial } : EMPTY);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function submit(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    const { _id, __v, createdAt, updatedAt, ...data } = form;
    onSave(data);
    if (!initial) setForm(EMPTY);
  }

  return (
    <form className="card form" onSubmit={submit}>
      <h2>{initial ? `Edit: ${initial.name}` : 'Add a plant'}</h2>
      <div className="grid">
        {FIELDS.map(([key, label]) => (
          <label key={key}>
            {label}
            <input name={key} value={form[key]} onChange={change} required={key === 'name'} />
          </label>
        ))}
      </div>
      <label>
        Description
        <textarea name="description" rows="3" value={form.description} onChange={change} />
      </label>
      <div className="actions">
        <button type="submit">{initial ? 'Update plant' : 'Add plant'}</button>
        {initial && (
          <button type="button" className="secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
