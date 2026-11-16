const BASE = '/api/plants';

async function request(url, options) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

export const getPlants = (search = '') =>
  request(search ? `${BASE}?search=${encodeURIComponent(search)}` : BASE);
export const createPlant = (plant) =>
  request(BASE, { method: 'POST', body: JSON.stringify(plant) });
export const updatePlant = (id, plant) =>
  request(`${BASE}/${id}`, { method: 'PUT', body: JSON.stringify(plant) });
export const deletePlant = (id) => request(`${BASE}/${id}`, { method: 'DELETE' });
