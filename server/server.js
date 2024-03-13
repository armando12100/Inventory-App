import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import indexRoutes from "./routes/indexRouter.js";
import createDecksRoutes from "./routes/createDeckRouter.js";
import allDecksRoutes from "./routes/allDecksRouter.js";
import cors from 'cors';

const app = express();

dotenv.config();
app.set('views', './views');
app.set('view engine', 'ejs');

// App Configuration
app.use(express.json());
app.use(cors());

// const editDeck = require('./routes/editDeckRouter')

app.use('/', indexRoutes);
app.use('/createDeck', createDecksRoutes);
app.use('/allDeck', allDecksRoutes);
app.use('/editDeck', allDecksRoutes);

// connect to mongoose
mongoose.connect(process.env.MONGODB_URL);


// start server
const PORT = 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
});
