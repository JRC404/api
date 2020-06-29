const express = require('express');
const app = express();
const sql = require('mssql');

app.get('/', async (req, res) => {

    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('mssql://sa:password@localhost/database')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
    //* Code is cleaner, just needs the correct information.
    res.send("Hello, World. I am trying to find something interesting to do.");
})

app.listen(3000, () => {
    console.log('Port 3000.');
})