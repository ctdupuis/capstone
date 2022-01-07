const movies = require('./db.json');

const users = [
    {
        username: "aymohamed",
        password: "pass",
    
    },
    {
        username: "mohamed",
        password: "pass1",
   
    },
];
const id = 4

module.exports={
    createItem: (req,res) =>{
        console.log(req.body)
        let {id, title} = req.body;
        let bodyObj = {
          id: id,
          title: title 
        }
        movies.push(bodyObj)
        res.status(200).send(movies)
    },
    login: (req,res) =>{
        const {username, password} = req.query;
        const foundUser = users.find((user)=> {
            return username === user.username

        });

        if (!foundUser){
            res.status(409).send("user or pass not correct"); 
        }
        console.log(foundUser)
        res.status(200).send(foundUser); //this info is the res in res.data
    },
}