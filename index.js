const express = require("express");
const app = express()

// create a route handler
app.get("/", (req,res) => {
    res.send({"hello": "there"});
});

//port will have a dynamic value, read from env variable on Heroku and the value 5000 on the local machine
const PORT = process.env.PORT || 5000;
app.listen(PORT);