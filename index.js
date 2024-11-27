const express = require('express');
const jokes = require('./jokes.json')


const app = express();


app.get('/getjokes', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.jokes.length);
    res.json(jokes.jokes[randomIndex]);
});


const Port = 3000;
app.listen(Port, () => {
    console.log(`server is running on ${Port}`);

})
