
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = require('./Routers/Index');
const PORT = 3003;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, (error) => {

    if(!error){
        console.log(`Server running on http://localhost:${PORT}`);
    }

})








