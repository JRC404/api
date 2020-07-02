const express = require('express');
const app = express();
const sql = require('mssql');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');


app.get('/', async (req, res) => {

    try {
        await sql.connect('mssql://sa:YourStrong!Passw0rd@localhost,1401/CodeNation');
        const result = await sql.query `select * from students where id = 18`;
        console.dir(result)
        res.render('index', {result});
    } catch (err) {
        // ... error checks
        console.log('error.');
        res.render('index', {error: "messed it up."})
    }
    //* Code is cleaner, just needs the correct information.

})

app.listen(3000, () => {
    console.log('Port 3000.');
})