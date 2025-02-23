import * as SQLite from 'expo-sqlite';
import Place from '../models/Place';

let db = null;

export async function initializeDatabase() {
  try {
    db = await SQLite.openDatabaseAsync('places.db');

    await db.execAsync(`CREATE TABLE IF NOT EXISTS places (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      latitude REAL NOT NULL,
      longitude REAL NOT NULL
    );
    `);
    return db;
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

export async function savePlace(place) {
  try {
    const result = await db.runAsync(
      `INSERT INTO places (id, title, imageUri, address, latitude, longitude)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        place.id,
        place.title,
        place.imageUri,
        place.address,
        place.latitude,
        place.longitude,
      ]
    );

    console.log('Place saved:', result.lastInsertRowId);
    return result.lastInsertRowId;
  } catch (error) {
    console.error('Error saving place:', error);
    throw error;
  }
}

export async function fetchPlaces() {
  try {
    const places = await db.getAllAsync('SELECT * FROM places');
    return places.map(
      (place) =>
        new Place(
          place.title,
          place.imageUri,
          place.address,
          place.latitude,
          place.longitude
        )
    );
  } catch (error) {
    console.error('Error fetching places:', error);
    throw error;
  }
}

export async function deleteAllPlaces() {
  try {
    await db.runAsync('DELETE FROM places');
    console.log('All places deleted');
  } catch (error) {
    console.error('Error deleting all places:', error);
    throw error;
  }
}
