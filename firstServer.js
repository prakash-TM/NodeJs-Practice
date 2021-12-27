// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 10))

const HTTP = require("http")

HTTP.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }) // some thunder client verification purpose
    res.write("Created my First server!!!")
    res.write("<h1>hi</h1>")

    res.end()

}).listen(3100)