import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import indexRoutes from "./routes/indexRouter.js";
import createDecksRoutes from "./routes/createDeckRouter.js";
import allDecksRoutes from "./routes/allDecksRouter.js"

const app = express();

dotenv.config();
app.set('views', './views');
app.set('view engine', 'ejs');

// App Configuration
app.use(express.json());

// const editDeck = require('./routes/editDeckRouter')

app.use('/', indexRoutes);
app.use('/createDeck', createDecksRoutes);
app.use('/allDeck', allDecksRoutes);
app.use('/editDeck', allDecksRoutes);

// mongoose.connect("mongodb+srv://asan5900:Jackie22@inventoryapp.bwkbxzq.mongodb.net/InventoryApp?retryWrites=true&w=majority");
mongoose.connect(process.env.MONGODB_URL);


const PORT = 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
});
