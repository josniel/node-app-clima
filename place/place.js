const axios = require('axios');

const getPlaceLatLon = async(direction) => {

    const encodeUrl = encodeURI(direction);

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=c012a4fcce85775564261624c2491eef&query=${encodeUrl}`
    });
    const resp = await instance.get()
    if (resp.data.location.length === 0) {
        throw new Error(`No hay resultados para ${direction}`)
    }
    const data = resp.data.location;
    const latitude = data.lat;
    const longitude = data.lon;
    const region = data.region;
    const country = data.country;
    const name = data.name
    return {
        name,
        latitude,
        longitude

    }
}


module.exports = {
    getPlaceLatLon
}