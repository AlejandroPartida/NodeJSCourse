const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encodedURL = encodeURI(argv.direccion);
console.log(encodedURL);

const instance = axios.create({
    baseURL: `http://api.weatherapi.com/v1/current.json?key=481a9bfa99c7429c9d8235207211101&q=${encodedURL}`
});



instance.get()
    .then(resp => {
        console.log(resp.data.location);
    })
    .catch(err => {
        console.log('ERROR!!!!!', err);
    });