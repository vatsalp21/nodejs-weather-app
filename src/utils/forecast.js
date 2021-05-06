const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f08a7bf1d804ac8fc9c1193a85e96335&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          "°C degrees out. It feels like " +
          body.current.feelslike +
          "°C degrees out. The humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
