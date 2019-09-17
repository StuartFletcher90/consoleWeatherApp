const request = require("request")
const {promisify} = require("util") // promises

const promisifiedRequest = promisify(request)
const locationApi= "pk.eyJ1Ijoic3R1YXJ0ZmxldGNoIiwiYSI6ImNrMG5xaWt3azAyZXUzbG1sNmpoeDJmMzcifQ.E5tQstyjOI65j-aXfyH6hw"

const getLocation = async (place) => {
    try {
       let data = await promisifiedRequest({
           url:`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${locationApi}`, json: true})
           return({
            name: data.body.features[0].place_name,
            Latitude: data.body.features[0].center[0], 
            Longitude: data.body.features[0].center[1]
        })
   } catch (error) {
       console.log("theres been an error")
   }
   }
   module.exports = {
       getLocation,
   }