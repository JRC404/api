const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.send("Hello, World. I am trying to find something interesting to do.");
})

app.listen(3000, () => {
    console.log('Port 3000.');
})