require("dotenv").config();


const express = require("express");
const cors = require("cors")

const {SERVER_PORT}=process.env;

const app = express();
app.use(cors());
app.use(express.json()); 



app.get('/list', )



console.log('hello')

app.listen(SERVER_PORT, () =>
     console.log(`your server is running on port: ${SERVER_PORT}`))