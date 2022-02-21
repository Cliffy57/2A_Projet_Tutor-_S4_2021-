const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var mysql = require('mysql');

var con = mysql.createPool({
    host: "devbdd.iutmetz.univ-lorraine.fr",
    user: "clause11u_appli",
    password: "32005657",
    database: "clause11u_tourisme"
  
  });

app.use(cors())
app.use(express.json())

app.get("/getData", (req, res) =>{
    
  const sqlSelect = "SELECT * FROM Lieux";
  con.query(sqlSelect, (err, result)=> 

    res.send(result)

)});

app.listen(3001, () => {
    console.log("oui")
})