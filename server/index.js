const { Password, Publish } = require("@mui/icons-material");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1",
  database: "cs157a",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const Title = req.body.Title;
  const Description = req.body.Description;
  const Rating = req.body.Rating;
  const Total_Time = req.body.Total_Time;
  const Publish_Date = req.body.Publish_Date;
  const Cuisine = req.body.Cuisine;
  const Author_Name = req.body.Author_Name;
  const Preparation = req.body.Preparation;
  const Measurement = req.body.Measurement;
  const Instruction = req.body.Instruction;
  const Ingredient = req.body.Ingredient;

  const sqlInsert1 = "INSERT INTO author (Author_Name) VALUES(?)";
  db.query(sqlInsert1, [Author_Name], (err, result) => {
    console.log(result);

    const sqlInsert =
      "INSERT INTO recipes (Title,Description,Rating,Total_Time,Publish_Date,Cuisine) VALUES(?,?,?,?,?,?)";
    db.query(
      sqlInsert,
      [Title, Description, Rating, Total_Time, Publish_Date, Cuisine],
      (err, result) => {
        console.log(err);

        const sqlInsert2 =
          "INSERT INTO preparations (Preparation,Measurement,Instruction,Ingredients)  VALUES(?,?,?,?)";

        db.query(
          sqlInsert2,
          [Preparation, Measurement, Instruction, Ingredient],
          (err, result) => {
            console.log(result);
          }
        );
      }
    );
  });
});

app.delete("/api/delete/:Title", (req, res) => {
  const title = req.params.Title;
  const sqlDelete = "DELETE FROM recipes WHERE Title = (?)";

  db.query(sqlDelete, title, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/api/update", (req, res) => {
  const title = req.body.Title;
  const Publish_Date = req.body.Publish_Date;
  const sqlUpdate = "Update Recipes SET Title = ? WHERE Publish_DATE = ?";

  db.query(sqlUpdate, [title, Publish_Date], (err, result) => {
    if (err) console.log(err);
  });
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM recipes";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, function () {
  console.log(`Listening to port 3001`);
});
