const express = require('express');
const router = express.Router();


// Index Page
router.get('/', (req, res) => {
    res.render('editDeck')
});

module.exports = router;