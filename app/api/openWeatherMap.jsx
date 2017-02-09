var axios = require('axios');


// 7a2bd453934340953e6d2f6e10bafd1c
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7a2bd453934340953e6d2f6e10bafd1c&units=imperial';
module.exports = {

  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
        }
        else{
          return res.data.main.temp;
        }
    },function(res){
      throw new Error(res.data.message);
    })
  }
}
