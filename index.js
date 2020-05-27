const place = require('./location/location')
const weather = require('./weather/weather')

let getInfo = async(address) => {

    try {
        

        let getAddress = await place.req(address)
        let getTemp = await weather.getWeather(getAddress.lat, getAddress.lon)


        return `The Weather in ${ getAddress.address } is ${ getTemp }°C`
    
    } catch (e) {
        return `Caanot Find Weather information for ${address}`
    }
}

console.log(getInfo)