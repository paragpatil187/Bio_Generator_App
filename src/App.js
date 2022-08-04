import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [stream, setStream] = useState("");
  const [school, setSchool] = useState("");
  const[age,setAge]=useState("")

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleInputStream = (e) => {
    setStream(e.target.value);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleInputAge=(e)=>{
    setSelectionRange(e.target.value)
  }

  return (
    <div className="App">
       
      <h1>Bio - Generator</h1>
      <div className="container">
        <div className="option">
          
          <h2>Options</h2>
          <div className="box">
          <h3>Name</h3>
          <input
            type="text"
            placeholder="Enter name"
            onChange={handleInputName}
          />
          <h3>Gender</h3>
          <select
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button>Random name</button>

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>Location</label>
            <input type="text" onChange={handleInputLocation}></input>
            <button>Random Location</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>School</label>
            <input type="text" onChange={handleInputSchool}></input>
            <button>Random School</button>
            <label>Specialization</label>
            <input type="text" onChange={handleInputStream}></input>
            <button>Random Specialization</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>Occupation</label>
            <input type="text"></input>
            <button>Random Occupation</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>Religious background</label>
            <textarea rows="5" cols="20"></textarea>
            <button>Random religion</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>Reason for meeting</label>
            <textarea rows="5" cols="20"></textarea>
            <button>For peace</button>
            <button>For personal reason</button>
            <button>For prayer</button>
            
            

          </div>
          </div>
          
          
          
          
          
           
          
            
            
             
            
            
        
        <div className="result">
          <h2>Result</h2>
          <div>
            {name} age {age} is from the {location}. He is studying {stream} at {school}.
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;