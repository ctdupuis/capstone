require("dotenv").config();

const express = require("express");

const cors = require("cors")
const {SERVER_PORT}=process.env;
const ctrl = require("./controller")

const app = express();
app.use(cors());
app.use(express.json()); 


app.use(express.static("client"))

app.get("/",()=>{
     res.sendFile("index.html")
})

app.post("/movies", ctrl.createItem)



console.log('hello')






app.listen(SERVER_PORT, () =>
     console.log(`your server is running on port: ${SERVER_PORT}`))