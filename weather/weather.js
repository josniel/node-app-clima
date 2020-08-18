const axios = require('axios');

const getWeather = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=900baefcfc24b40d254484428a027138&units=metric`);
    if (resp.data.main.temp === 0) {
        console.log('No existen datos del clima para esta direccion')
    } else {
        return resp.data.main.temp
    }
}

module.exports = {
    getWeather
}