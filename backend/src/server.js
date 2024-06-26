const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const routes = require('./routes/index');

app.use(cors());
app.use(express.json());

// Mount all the API routes under '/api'
app.use('/api', routes); 

app.get('/', (req, res) => {
    res.send('Welcome to the Recipe API');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});