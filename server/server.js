// Setup our app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Set up static files
app.use(express.static('server/public'));

// Set up body-parser functionality
app.use(bodyParser.urlencoded({extended: true}));

// define global variable(s)
let equation = [];


// Set up route /my-colorful-calculator
app.get('/my-colorful-calculator', (req, res) => {
    console.log('in GET');
    res.send();
});
 
// Set up /calculations POST route
app.post('/calculations', (req, res) => {
    console.log('in /calculations POST', req.body );
    selectedStuffs.push(req.body);
    res.sendStatus(201);
});

// arithmetic functions here!!!




// set up PORT to 'listen'

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})