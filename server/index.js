require("dotenv").config();

const express = require("express");

const cors = require("cors")
const ctrl = require("./controller")

const app = express();
app.use(cors());
app.use(express.json()); 


app.use(express.static("client"))

app.get("/", (req, res) => {
     res.sendFile("index.html")
})

app.post("/movies", ctrl.createItem)



const PORT = process.env.PORT || 4545;

app.listen(PORT, () => console.log(`your server is running on port: ${PORT}`))