const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3a7a1be4339ad62c6d5a62f8d405b626&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is curently ' + body.current.temperature + ' degrees out.');
        }
    });
};

module.exports = forecast;