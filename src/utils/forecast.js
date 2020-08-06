const request = require('request')
const forecast= (latitude,longitute,callback)=>{ 
    const url ='http://api.openweathermap.org/data/2.5/weather?lat='+longitute+'&lon='+latitude+'&appid=1bb1c0c76edc72e974a72cb04a9de4a4&units=metric'
 
    //'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' +longitute 
   
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location'+body.error,undefined)
        } else {
            callback(undefined,body.weather[0].description + ', It is currently ' + body.main.temp + ' degress out.This high today is ' + body.main.temp_max +' with a low of ' + body.main.temp_min +' Cloud percentage is ' + body.clouds.all + ' %.')   
        }
    })
   }
   module.exports = forecast