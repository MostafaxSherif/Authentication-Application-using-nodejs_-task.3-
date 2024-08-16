// src/config/initDb.js
const db = require('./db');

const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.query(createUserTable)
  .then(() => console.log('User table created'))
  .catch((err) => console.error('Error creating user table', err))
  .finally(() => process.exit());
