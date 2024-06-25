const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3001;

app.use(cors()); // Use the cors middleware
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe API');
});

// Sample endpoint
app.get('/api/recipes', (req, res) => {
    const recipes = [
        {
            id: 1,
            title: 'Burger',
            category: 'Fast Food',
            image: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg',
            instructions: '1. Heat a grill or skillet over medium heat.\n2. Season ground beef with salt and pepper.\n3. Form beef into patties and cook for 4-5 minutes per side.\n4. Toast the buns on the grill or skillet.\n5. Assemble the burger with lettuce, tomato, cheese, and your favorite condiments.\n6. Serve immediately.'
        },
        {
            id: 2,
            title: 'Recipe 2',
            category: 'Category 2',
            image: '',
            instructions: 'Instructions 2'
        }
    ];
    
    
    res.json(recipes);
});

app.post('/api/recipes', (req, res) => {
    const newRecipe = req.body;
    newRecipe.id = Date.now(); // Assign a unique ID for simplicity
    console.log('New recipe received:', newRecipe); // Log the new recipe
    res.status(201).json(newRecipe);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});