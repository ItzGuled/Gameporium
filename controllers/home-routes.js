const router = require('express').Router();
const { games } = require('../data/games.json');
const sequelize = require('../config/connection');
const { User, Comment, Rate } = require('../models');



router.get('/', (req,res) => {
    console.log(games);
})


// login
module.exports = router;