const express = require("express");
const app = express();
const port = 5000;







//type 1 :

// localhost:7200/nikhil?city=indore - {You should not be here}
// localhost:7200/nikhil?city=bhopal - {It should work as it is}


const checkCity = (req) => {
    if (req.query.city === "indore") {
        return false;
    }
    return true;
};

const checkState = (req) => {
    if (req.query.state === "shilong") {
        return false;
    }
    return true;
};

app.get("/nikhil", (req, res) => {
    console.log("hi", req.query)
    if (!checkCity(req)) {
        return res.status(400).json({ message: "You are not allowed to be here" });
    }

    if (!checkState(req)) {
        return res.status(400).json({ message: "You are not allowed to be here" });
    }


    //else part
    const response = {
        name: "Nikhil",
        city: "Dhule",
        message: "My name is Nikhil. I'm from Dhule",
    };
    res.json(response);
});


//type 2:



// localhost:7200/prakash?city=indore - {You are not allowed to be here}
// localhost:7200/prakash?city=bhopal - {My name is Prakash. I', from Tirupur} (it will work other then indore)

const validatePrakashRequest = (req, res, next) => {
    if (!checkCity(req)) {
        return res.status(400).json({ message: "You are not allowed to be here" });
    }

    if (!checkState(req)) {
        return res.status(400).json({ message: "You are not allowed to be here" });
    }

    console.log("Inside validatePrakashRequest middleware");
    next(); // next() is must
};



app.get("/prakash", validatePrakashRequest, (req, res) => {
    res.send("My name is Prakash. I', from Tirupur");
});






app.post("/register-user", (req, res) => {
    const response = {
        message: "Post request loaded successfully",
    };
    res.json(response);
});

app.get("*", (req, res) => {
    res.send({});
});

app.listen(port, () => {
    console.log(`My application is running on http://localhost:${port}`);
});