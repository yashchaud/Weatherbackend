const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/:city', (req, res, next) => {
    console.log("City route hit for:", req.params.city);
    productsController.getWeather(req, res, next);
});

module.exports = router;
