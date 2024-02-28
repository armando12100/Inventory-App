const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const mongoose = require('mongoose');
const { json } = require('node:stream/consumers');

const deckSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number
});

const Deck = mongoose.model('Deck', deckSchema);

// Edit Deck Page

router.get('/editDeck/:id', async (req, res) => {
    try {
        const data = await Deck.findById(req.params.id);
        res.render('editDeck.ejs', {
            title: "Edit Deck",
            decks: data
        })
    } catch (error) {
        console.log('oopsies');
    }
} );

// Update Deck 

router.post('/editDeck/:id', async (req, res) => {
    const deckId = req.params.id;
    console.log(deckId);

    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const stock = req.body.stock;

    await Deck.findByIdAndUpdate(deckId, {
        name: name,
        description: description,
        price: price,
        stock: stock
    });

    // const deck = await Deck.findById(deckId);
    // console.log(deck);

    // res.json({deck: deck});
    res.redirect('/allDeck');

});

// Delete Deck

router.get('/delete/:id', async (req, res) => {
    const deckId = req.params.id;
    
    await Deck.findByIdAndRemove(deckId);

    res.redirect('/allDeck');
})

// Create Deck Page
router.get('/', async (req, res) => {
    const data = await Deck.find({});
    res.render('allDecks.ejs', {
        title: "All Decks",
        decks: data
    });
});

router.post('/', (req, res, next) => {
    const newDeck = new Deck({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
    })
    newDeck.save();
    res.redirect('/allDeck');
});

module.exports = router
