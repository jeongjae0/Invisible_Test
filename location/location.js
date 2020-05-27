const unirest = require("unirest")

const req = unirest("GET", "https://ip-geo-location.p.rapidapi.com/ip/23.123.12.11");

req.query({
	"format": "json"
})

req.headers({
	"x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
	"x-rapidapi-key": "8e07474c9dmsh6995ba27d0f7dacp16dfb4jsn3df3fe85b9a4",
	"useQueryString": true
})


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
})

module.exports = {
    req
}