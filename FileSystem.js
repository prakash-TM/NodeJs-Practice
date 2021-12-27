var fs = require("fs")
console.log("started")

//synchronous method
var data = fs.readFileSync("./info.txt")
    // var data = fs.readFileSync("./SampleCSV.csv")
console.log("normal output(sync) : ", data)
console.log("converted to string output(sync) : ", data.toString())


//asynchronous method

fs.readFile("./info.txt", function(err, Adata) {
    if (err) return err
    console.log("normal output(Async) : ", Adata)
    console.log("converted to string output(Async) : ", Adata.toString())
})


console.log("ended")