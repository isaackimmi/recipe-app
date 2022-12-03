import React, {useState} from "react";
import './App.css';
import Axios from 'axios'

function App() {

  const [Recipe_ID,setID]  = useState('')
  const [Rating,setRating] = useState('')

 

  const submitRecipe = () => {
    Axios.post('http://localhost:3001/api/insert',
    {
      Recipe_ID: Recipe_ID,
      Rating: Rating
      
    }).then(() => {
      alert('sucessfuly insert');
    })
  }


 

  return (
    <div>
          <h1>Recipe Database</h1>
          <div className = "form">

          <label> Recipe ID</label>
          <input type = "text" name ="recipes" onChange = {(e)=> {
            setID(e.target.value)
          } }/>

          <label>Rating</label>
          <input type = "text" name = "Rating" onChange={(e) => {
            setRating(e.target.value)
          }}/>

          <button onClick = {submitRecipe}>Submit</button>
         
          </div>
          
    </div>
 
  
  );
}

export default App;
