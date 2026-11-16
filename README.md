# Native Plant App (MERN CRUD)

Architecture: **React (Vite)** ↓ **Express REST API** ↓ **MongoDB (Mongoose)**

- Database: `nativePlantApp`
- Collection: `plants`

## REST API
| Method | Route | Purpose |
|---|---|---|
| GET | /api/plants?search= | View all plants (optional search) |
| GET | /api/plants/:id | View one plant |
| POST | /api/plants | Create a plant |
| PUT | /api/plants/:id | Edit a plant |
| DELETE | /api/plants/:id | Delete a plant |

## Run locally
1. Start MongoDB. To store the data files inside this repo (so the `*.wt` files can be committed):
   ```bash
   mongod --dbpath ./data
   ```
   (Or use a normal local MongoDB / Atlas and set `MONGO_URI` in `server/.env`.)
2. Install: `npm run install:all`
3. Seed (optional): `npm run seed`
4. Terminal A: `npm run server`  (http://localhost:5000)
5. Terminal B: `npm run client`  (http://localhost:5173)

## Commit the database files
Stop `mongod` first (Ctrl+C) so files are flushed, then:
```bash
git add data/
git commit -m "Add MongoDB data files (*.wt) - db: nativePlantApp, collection: plants"
git push
```
