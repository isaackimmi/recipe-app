import React, { useState, useEffect } from "react";
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

  const [RecipeList, setRecipeList] = useState([]);

  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setRecipeList(response.data);
    });
  }, []);

  const submitRecipe = () => {
    Axios.post("http://localhost:3001/api/insert", {
      Rating: Rating,
      Title: Title,
      Description: Description,
      Total_Time: Total_Time,
      Publish_Date: Publish_Date,
      Cuisine: Cuisine,
      Author_Name: Author_Name,
      Preparation: Preparation,
      Measurement: Measurement,
      Instruction: Instruction,
      Ingredient: Ingredient,
    }).then(() => {
      setRecipeList([...RecipeList]);
    });
    window.location.reload(true);
  };

  const deleteRecipe = (title) => {
    Axios.delete(`http://localhost:3001/api/delete/${title}`);
    window.location.reload(true);
  };

  const updateRecipe = (date) => {
    Axios.put("http://localhost:3001/api/update", {
      Publish_Date: date,
      Title: newTitle,
    });
    setNewTitle("");
    window.location.reload(true);
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
        className="btn btn-success btn-lg"
        onClick={submitRecipe}
      >
        Submit
      </button>

      <div className="recipe-list">
        {RecipeList.length > 0 &&
          RecipeList.map((val) => {
            return (
              <div className="recipe-card">
                <p>Title: {val.Title}</p>
                <div className="btn-container">
                  <button
                    className="btn btn-danger btn-sm mr"
                    onClick={() => {
                      deleteRecipe(val.Title);
                    }}
                  >
                    Delete
                  </button>
                  <input
                    type="text"
                    id="updateInput"
                    onChange={(e) => {
                      setNewTitle(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => {
                      updateRecipe(val.Publish_Date);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
