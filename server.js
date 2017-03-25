var express = require('express')
var mysql = require('mysql')

var app = express()
var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : '',
  timeout: 60000
})

connection.connect()

// POST method route
app.post('/image', function (req, res) {
  	res.send('POST request to the homepage')

  	connection.query('SELECT * AS solution', function (error, results, fields) {
		if (error){
			console.log("Error: ", error)
			return
		} 
		console.log("Results: ", results)
		res.send('The solution is: ', results[0].solution)
	})

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

