const router = require('express').Router();
// const { games } = require('../data/games.json');
const sequelize = require('../config/connection');
const { User, Comment, Rate } = require('../models');
const axios = require('axios');


router.get('/', (req,res) => {
    axios.get('https://www.giantbomb.com/api/games/?api_key=f69140845ff4d02155385c0b54aa36d12f51108f&format=json&limit=100&sort=original_release_date:desc&platforms=pc')
        .then(function(response) {              
            const games = response.data.results;      
            res.render('homepage', { games });
            
        }).catch(function(error) {
            console.log(error);
        })
    
})

router.get('/:id', (req,res) =>{})
// login
module.exports = router;


