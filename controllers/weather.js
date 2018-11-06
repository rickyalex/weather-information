var logger = require('morgan');
let request = require('request');
var config = require('../config');

exports.search = function (req,res) {
	var city = req.params.city
	var api_key = config.api_key
	var url = `http://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=`+api_key

	request(url, function (err, response, body) {

		if(err){
	    	console.log('error:', err);
	  	} else {
	    	console.log('body:', body);
	  	}
	  	
	});
}