// Set up my colorful calculation app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Set up static files
app.use(express.static('server/public'));

// Set up body-parser functionality
app.use(bodyParser.urlencoded({extended: true}));

// define global variable(s)
let mathsHistory = [];

let answer = 0;


 
// Set up /calculations POST route + "mathin' stuuuffs"
app.post('/calculations', (req, res) => {
    console.log('in /calculations POST', req.body );

// math functions applied here via IF statement
    if (req.body.operator === '+') {
        answer = Number(req.body.inputOne) + Number(req.body.inputTwo)
        console.log('answer:', answer);
    }

    else if (req.body.operator === '-') {
        answer = Number(req.body.inputOne) - Number(req.body.inputTwo)
        console.log('answer:', answer);
    }
    
    else if (req.body.operator === '*') {
        answer = Number(req.body.inputOne) * Number(req.body.inputTwo)
        console.log('answer:', answer);
    }
    else if (req.body.operator === '/') {
        answer = Number(req.body.inputOne) / Number(req.body.inputTwo)
        console.log('answer:', answer);
    }
    
    else {
       answer = NaN;
        console.log('answer:', answer);
        // kick output: user clicking equals button w/o operator selected!!!
    }

        const answerPacked = {
            inputOne: req.body.inputOne,
            operator: req.body.operator,  // consists of req.body. and object properties 
            inputTwo: req.body.inputTwo,  // plus newly defined global variable 'answer' as property
            answer: answer,
        }
    mathsHistory.push(answerPacked);
    res.send(201, 'one yee and half a haw for me, thank you.');
// set and push answer object to answer array for use in history on DOM

}); 

// Set up /calculations GET route
app.get('/calculations', (req, res) => {
    console.log('in GET /calculations');
    res.send({answer: answer}); // send the answer back, yo. 3xce1leeeenn7
});

// Set up /math-history GET route
app.get('/math-history', (req, res) => {
    console.log('in GET /math-history');
    res.send(mathsHistory);
});

// XXXXXXXXXX>>> new stuffs here!!!

// set up PORT to 'listen'

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})