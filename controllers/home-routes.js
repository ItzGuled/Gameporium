const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Rate } = require('../models');

async function getGames() {
    const apiUrl = 'https://www.giantbomb.com/api/games/?api_key=' + process.env.API_KEY + '&format=json';

    const games = await fetch(apiUrl);
    console.log(games);
    if(games.ok) {
        console.log(games);
    }
}

getGames();


// login
