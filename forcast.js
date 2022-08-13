const request = require('postman-request')

const forcast=(address,callback)=>{
    // const query = `&query=${city}`
        const url = 'http://api.weatherstack.com/current?access_key=890b0c211974bf50611b5866a78cb6f8&'+'query='+encodeURIComponent(address)+'&units=m'
    
        request({url:url , json:true} , (error,{body})=>{
            if(error){
                callback('unable to fetch',undefined)
            }
            else if(body.error){
                callback('bad request',undefined)
            }
            else {
                callback({
                    forcast : body.current.temperature + 'c',
                    rain : body.current.weather_descriptions,
                    feelsLike : body.current.feelslike,
                    location : body.location.name
                })
            }
        })
    }

    module.exports = forcast