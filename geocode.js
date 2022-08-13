const request = require('postman-request')

const geoCode = (adress,callback)=>{

    const geoCodeURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/$'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoiYXNoaXNobmljazAwOSIsImEiOiJjbDZuY21tbzYwMDhuM2pvN2hmc2dhcGY0In0.9nAktg5O5cgHWS5TXFhsRQ'
    console.log(geoCodeURL)
    request({url:geoCodeURL,json:true } , (error,response) =>{
        
        if(error){
            callback('unable to fetch',undefined)
        }
        else if(response.body.message){
            callback('bad request',undefined)
        }
        else{
            callback(undefined,{
                lattitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode