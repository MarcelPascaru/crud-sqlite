import sqlite3 from 'sqlite3';

// Create/connect to the database
const db = new sqlite3.Database("customers.db");
db.serialize(() => {
  // Create USERS a table
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
});

export default{
  db
}