import React, {useState,useEffect} from "react";
import './App.css';
import Axios from 'axios'

function App() {

  const [Rating,setRating] = useState('')
  const [Title,setTitle] = useState('')
  const [Description,setDescription] = useState('')
  
  const [Total_Time,setTime] = useState('')
  const [Publish_Date,setDate] = useState('')
  const [Cuisine,setCusine] = useState('')

  const[Author_Name,setAuthor] = useState('')


  const [Preparation,setPreparation] = useState('')
  const [Measurement,setMeasurement] = useState('')
  const [Instruction,setInstruction] = useState('')
  const [Ingredient, setIngredient] = useState('') 

  const [RecipeList,setRecipeList] = useState([])
  
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get')
    .then((response) => {
      setRecipeList(response.data)
    })
   },[])

 

  const submitRecipe = () => {
    Axios.post('http://localhost:3001/api/insert',
    {
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
      Ingredient: Ingredient
    }).then(() => {
      setRecipeList([...RecipeList,])
    })
  }


 

  return (
    <div>
          <h1>Recipe Database</h1>
          <div className = "form">
          
         

          <label>Title</label>
          <input type = "text" name ="title" onChange = {(e)=> {
            setTitle(e.target.value)
          }}/>

          <label>Description</label>
          <input type = "text" name ="description" onChange = {(e)=> {
            setDescription(e.target.value)
          }}/>

          <label>Rating</label>
          <input type = "text" name = "Rating" onChange={(e) => {
            setRating(e.target.value)
          }}/>

          <label>Total Time</label>
          <input type = "text" name = "total_time" onChange = {(e) => {
            setTime(e.target.value)
          }}/>

          <label>Publish Date</label>
          <input type = "text" name = "publish_date" onChange = {(e) => {
            setDate(e.target.value)
          }}/>

          <label>Cuisine</label>
          <input type = "text" name = "cuisine" onChange = {(e) => {
            setCusine(e.target.value)
          }}/>

          <label>Author Name</label>
          <input type = "text" name = "Author" onChange = {(e) => {
            setAuthor(e.target.value)
          }}/>


          <label>Preparation</label>
          <input type = "text" name = "preparation" onChange = {(e) => {
            setPreparation(e.target.value)
          }}/>

          <label>Measurement</label>
          <input type = "text" name = "measurement" onChange = {(e) => {
            setMeasurement(e.target.value)
          }}/>

          <label>Instruction</label>
          <input type = "text" name = "instruction" onChange = {(e) => {
            setInstruction(e.target.value)
          }}/>
          <label>Ingredient</label>
          <input type = "text" name = "Ingredient" onChange = {(e) => {
            setIngredient(e.target.value)
          }}/>

          <button onClick = {submitRecipe}>Submit</button>

          {RecipeList.map((val)=> {
            return(
              <div>
                <p>Title: {val.Title}</p>
                <button>Delete</button>
                <input type ="text"/>
                <button>Update</button>

              </div>
            )
                
              
              
          })}
         
          </div>
          
    </div>
 
  
  );
}

export default App;
