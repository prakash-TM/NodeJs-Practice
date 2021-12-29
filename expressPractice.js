const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    console.log("I am the first route");
    res.send("Welcome to Vidhya Skill School");
});

app.get("/priyanka", (req, res) => {
    res.send("My name is Priyanka. I'm from Indore");
});

app.get("/arun", (req, res) => {
    res.send("My name is Arun. I'm from Morena");
});

app.get("/nikhil", (req, res) => {
    const response = {
        name: "Nikhil",
        city: "Dhule",
        message: "My name is Nikhil. I'm from Dhule",
    };
    res.json(response);
});

app.get("/prakash", (req, res) => {
    res.send("My name is Prakash. I', from Tirupur");
});

app.post("/register-user", (req, res) => {
    const response = {
        message: "Post request loaded successfully",
    };
    res.json(response);
});

app.delete("/user", (req, res) => {
    res.send("I am a delete request");
});

app.get("/user", (req, res) => {
    res.send("I am a Get User");
});

app.post("/user", (req, res) => {
    res.send("I am a create User");
});

app.put("/user", (req, res) => {
    res.send("I'm a put request");
});

app.patch("/user", (req, res) => {
    res.send("I'm a Patch request");
});

app.get("*", (req, res) => {
    res.status(404).send("There is no such route available");
});

app.listen(port, () => {
    console.log(`My application is running on http://localhost:${port}`);
});