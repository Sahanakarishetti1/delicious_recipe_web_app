const db = require('../db/database');

class Recipe {
    static getAllRecipes() {
        const stmt = db.prepare('SELECT * FROM recipes');
        return stmt.all();
    }

    static getRecipeById(id) {
        const stmt = db.prepare('SELECT * FROM recipes WHERE id = ?');
        return stmt.get(id);
    }

    static createRecipe({ title, category, image, instructions }) {
        const stmt = db.prepare('INSERT INTO recipes (title, category, image, instructions) VALUES (?, ?, ?, ?)');
        const result = stmt.run(title, category, image, instructions);
        return this.getRecipeById(result.lastInsertRowid);
    }
}

module.exports = Recipe;