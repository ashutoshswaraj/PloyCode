const express = require('express');

const {magicMath} = require("../controllers/magicMathController")

const router = express.Router();

router.get('/:n', magicMath);


module.exports = router;