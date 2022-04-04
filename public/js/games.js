async function getGames() {
    const apiUrl = 'https://www.giantbomb.com/api/games/?api_key=' + process.env.API_KEY + '&format=json';

    const games = await fetch(apiUrl);
    console.log(games);
    if(games.ok) {
        console.log(games);
    }
}

getGames();