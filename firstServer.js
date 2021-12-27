// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 10))

const HTTP = require("http")

HTTP.createServer(function(req, res) {
    res.write("Created my First server!!!")
    res.end()

}).listen(3100)