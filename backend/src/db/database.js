const sqlite3 = require('better-sqlite3');

// Create a new database instance
const db = new sqlite3('recipes.db', { verbose: console.log });

// Initialize the recipes table
db.exec(`
CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    image TEXT,
    instructions TEXT NOT NULL
);
`);

module.exports = db;