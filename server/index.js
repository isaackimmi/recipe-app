const { Password } = require('@mui/icons-material')
const bodyParser = require('body-parser')
const cors=require("cors");
const express = require('express')
const app = express()
const mysql = require('mysql')



const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root1',
    database:'cs157a_database'
})



app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req,res) => {

    const Recipe_ID = req.body.Recipe_ID
    const Rating = req.body.Rating
    

    const sqlInsert = 
            "INSERT INTO recipes (Recipe_ID,Rating) VALUES(?,?)";
    db.query(sqlInsert,[Recipe_ID,Rating], (err,result)=>{
        console.log(err);
    })
})

app.get('/api/insert',(req,res) => {

})



app.listen(3001,function() {
    console.log(`Listening to port 3001`)
}) 