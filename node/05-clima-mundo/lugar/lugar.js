const axios = require('axios');

const getLugarLatLng = (direccion) => {



}

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