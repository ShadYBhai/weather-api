const geoCode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const address = process.argv[2]

geoCode(address,(error,{response,location}={})=>{
    if(error){
        return console.log(error)
    }
    
    forcast(location,(error,forcastData)=>{
        if(error) {return console.log(error)}
    
        console.log(forcastData)
        console.log(response)
    })   
})



