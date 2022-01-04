const express = require("express");
const route = require("./routes");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 5000;

app.use(
    rateLimit({
        windowMs: 60 * 1000, // 1 minute duration in milliseconds
        max: 10,
        message: "API limit exceed",
        headers: true,
    })
);

app.use("/data", route);

app.listen(port, () => {
    console.log(`Current port is http://localhost:${port}`);
});