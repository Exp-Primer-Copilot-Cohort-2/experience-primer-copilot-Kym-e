// Create web server

//create web server
//create a web server that listens on port 3000
//when a request is made to the server, the server should return the following JSON object
//{message: "Hello, world!"}
//use the express.js library to create the server
//use the res.json() function to send the JSON object
//use the app.listen() function to listen on port 3000

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: "Hello, world!"});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});