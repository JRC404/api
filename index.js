const express = require('express');
const app = express();
const sql = require('mssql');

app.get('/', async (req, res) => {

    const config = {
        user: 'sa',
        password: 'nicetry',
        server: 'localhost',
        database: 'Data'
    }

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        const request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT * FROM', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });

    /*

    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('mssql://username:password@localhost/database')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }

    */

    res.send("Hello, World. I am trying to find something interesting to do.");
})

app.listen(3000, () => {
    console.log('Port 3000.');
})