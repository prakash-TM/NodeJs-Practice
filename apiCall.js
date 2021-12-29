const https = require("https")
const req = https.get("https://jsonplaceholder.typicode.com/comments?postId=4", (res) => {
    if (res.statusCode !== 200) {
        console.error(`There is an error. Error Code is ${res.statusCode}`)
    }

    let data = ""
    res.on("data", (items) => {
        // console.log({ items })
        data += items
    })
    res.on("close", () => {
        console.log("Retrieved all data")
        console.log(JSON.parse(data))
    })

})

req.on("error", (err) => {
    console.error(`Encountered an error trying to make a request ${err.message}`)
})






















// default code of .get() --> hover the get you will get below code



// const https = require('https');

// https.get('https://encrypted.google.com/', (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);

//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });

// }).on('error', (e) => {
//     console.error(e);
// });