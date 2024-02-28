const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './fly.toml'});
app.set('views', './views');
app.set('view engine', 'ejs');

// App Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'css')));

const index = require('./routes/indexRouter');
const createDecks = require('./routes/createDeckRouter');
const allDecks = require('./routes/allDecksRouter');
// const editDeck = require('./routes/editDeckRouter')

app.use('/', index);
app.use('/createDeck', createDecks);
app.use('/allDeck', allDecks);
app.use('/editDeck', allDecks);

// mongoose.connect("mongodb+srv://asan5900:Jackie22@inventoryapp.bwkbxzq.mongodb.net/InventoryApp?retryWrites=true&w=majority");
mongoose.connect("mongodb+srv://asan5900:Jackie22@inventoryapp.bwkbxzq.mongodb.net/");


const PORT = 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
});
