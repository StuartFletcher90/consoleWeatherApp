const request = require("request")
const {promisify} = require("util") // promises

const promisifiedRequest = promisify(request)
// above replaces request with a promisified version

const apiKey = "0da22955cb450b12995dee14f71514ba"

// it will wait for the function to be done before moving onto another line.

const getWeather = async (locationData) => {
    try {
       let data = await promisifiedRequest({
           url:`https://api.darksky.net/forecast/${apiKey}/${locationData.Longitude},${locationData.Latitude}`, 
           json: true})
           return (data.body.currently)
   } catch (error) {
       console.log("theres been an error")
   }
   }

   module.exports = {
       getWeather,
   }
