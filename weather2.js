let request = require('request');

let apiKey = 'ef14ec973b8f99e16fb0288ee7161639';
let location = 'melbourne';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

request(url, function (err, response, body) {
if(err){
    console.log('error:', err);
} else {
    console.log('body:', body);
}
});