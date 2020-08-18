const argv = require('./config/yargs').argv
const place = require('./place/place');
const weather = require('./weather/weather');

// place.getPlaceLatLon(argv.direction)
//     .then(console.log);
// weather.getWeather(40.714, -74.006)
//     .then(console.log)
//     .catch(console.log);
const getInfo = async(direction) => {
    let placeFind = await place.getPlaceLatLon(direction);
    let weatherFind = await weather.getWeather(placeFind.latitude, placeFind.longitude);
    return (`El clima para ${placeFind.name} se encuentra actualmente en ${weatherFind} grados centigrados`);
}
getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);