const router = require('express').Router();
// const { games } = require('../data/games.json');
const sequelize = require('../config/connection');
const { User, Comment, Rate } = require('../models');
const axios = require('axios');

//GET all games on the front-end
router.get('/', (req,res) => {
    axios.get('https://www.giantbomb.com/api/games/?api_key=f69140845ff4d02155385c0b54aa36d12f51108f&format=json&limit=100&sort=original_release_date:desc&platforms=pc')
        .then(function(response) {              
            const games = response.data.results;      
            res.render('homepage', { games });
            
        }).catch(function(error) {
            console.log(error);
        })
    
});

//login
router.get('/login', (req,res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }    
    res.render('login.handlebars');
});

// GET single game
router.get('/:guid', (req,res) => {
    axios.get('https://www.giantbomb.com/api/game/'+ req.params.guid + '/?api_key=' + process.env.API_KEY + '&format=json')
        .then(function(response) {
            const game = response.data.results;
            res.render('single-post', { game });
        }).catch(function(error) {
            console.log(error);
        })
});

// GET comments and ratings
router.get('/:id', (req,res) => {
    
})

module.exports = router;


