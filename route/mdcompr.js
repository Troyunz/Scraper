const express = require('express')
let router = express.Router();
const mdcomps = require('../scrape/mdcomps')

router
    .get('/', (req, res, next) => {
        // mdcomps.getItems;
        res.json("Hi")
    })

module.exports = router;