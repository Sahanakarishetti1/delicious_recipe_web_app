const express = require('express');
const router = express.Router();

// Importing all the specific routes
const recipesRoutes = require('./recipesRoutes');

// Use the specific routes
router.use('/recipes', recipesRoutes);

module.exports = router;