const { Password, Publish } = require('@mui/icons-material')
const bodyParser = require('body-parser')
const cors=require("cors");
const express = require('express')
const app = express()
const mysql = require('mysql')



const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root1',
    database:'cs157a'
})



app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req,res) => {

    const Title = req.body.Title
    const Description = req.body.Description
    const Rating = req.body.Rating
    const Total_Time = req.body.Total_Time
    const Publish_Date = req.body.Publish_Date
    const Cuisine = req.body.Cuisine
    const Author_Name = req.bosy.Author_Name

    const sqlInsert = 
            "INSERT INTO recipes (Title,Description,Rating,Total_Time,Publish_Date,Cuisine) VALUES(?,?,?,?,?,?)";
    db.query(sqlInsert,[Title,Description,Rating,Total_Time,Publish_Date,Cuisine], (err,result)=>{
        console.log(err);
    

    const sqlInsert1 = "INSERT INTO author (Author_Name) VALUES(?)";
    db.query(sqlInsert1,[Author_Name],(err,result) => {
        console.log(err)
    })
    })
})

app.get('/api/insert',(req,res) => {
    res.send('hello')
})


app.listen(3001,function() {
    console.log(`Listening to port 3001`)
}) 