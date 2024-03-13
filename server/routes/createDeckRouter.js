import express from "express"
const router = express.Router();


// Index Page
router.get('/', (req, res) => {
    res.render('createDeck')
});

export default router