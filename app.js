const {getWeather} = require("./getWeather")
const {getLocation} = require("./getLocation")
const colors = require("colors")
const figlet = require("figlet")
const {promisify} = require("util")

const promisifiedFiglet = promisify(figlet)


const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
    const temp = Math.floor((weather.temperature -32) *5/9)
    const data = await promisifiedFiglet("Weather", {
        font: 'cola'

    })
    
    console.log(data.america)
    console.log(`The temperature in ${location.name.bgBlue} is ${colors.red(temp)}°C and the chance of rain is ${weather.precipProbability}`);

}

main(process.argv[2])









// call back method

// request takes two things, an object and a call back function
// request({url:`https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`, json: true}, (error, response) => {
//     // console log the error, response is json string data, turn data into JS response.body targets the response body object
//     if(error){
//         console.log(error)
//     } else {
//         const data = response.body
//         // console.log(`${data.currently.temperature}`);
//         console.log({temp: data.currently.temperature, windgust: data.currently.windGust})
//     }
// })