import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import logo from "./recipe-database.png";

function App() {
  const [Rating, setRating] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const [Total_Time, setTime] = useState("");
  const [Publish_Date, setDate] = useState("");
  const [Cuisine, setCusine] = useState("");

  const [Author_Name, setAuthor] = useState("");

  const [Preparation, setPreparation] = useState("");
  const [Measurement, setMeasurement] = useState("");
  const [Instruction, setInstruction] = useState("");
  const [Ingredient, setIngredient] = useState("");

  const submitRecipe = () => {
    Axios.post("http://localhost:3001/api/insert", {
      Rating: Rating,
      Title: Title,
      Description: Description,
      Total_Time: Total_Time,
      Publish_Date: Publish_Date,
      Cuisine: Cuisine,
      Author_Name: Author_Name,
    }).then(() => {
      alert("sucessfuly insert");
    });
  };

  return (
    <div className="page">
      <div className="header">
        <img width={"50px"} height={"50px"} alt="logo" src={logo} />
        <h1>Recipe Database</h1>
      </div>
      <div className="form-container">
        <div className="form">
          <label>Author Name</label>
          <input
            type="text"
            name="Author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <div className="form">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label className="pt-3">Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <label className="pt-3">Rating</label>
          <input
            type="text"
            name="Rating"
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />

          <label className="pt-3">Total Time</label>
          <input
            type="text"
            name="total_time"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <label className="pt-3">Publish Date</label>
          <input
            type="text"
            name="publish_date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <label className="pt-3">Cuisine</label>
          <input
            type="text"
            name="cuisine"
            onChange={(e) => {
              setCusine(e.target.value);
            }}
          />
        </div>

        <div className="form">
          <label>Preparation</label>
          <input
            type="text"
            name="preparation"
            onChange={(e) => {
              setPreparation(e.target.value);
            }}
          />

          <label className="pt-3">Measurement</label>
          <input
            type="text"
            name="measurement"
            onChange={(e) => {
              setMeasurement(e.target.value);
            }}
          />

          <label className="pt-3">Instruction</label>
          <input
            type="text"
            name="instruction"
            onChange={(e) => {
              setInstruction(e.target.value);
            }}
          />
          <label className="pt-3">Ingredient</label>
          <input
            type="text"
            name="Ingredient"
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        onClick={submitRecipe}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
