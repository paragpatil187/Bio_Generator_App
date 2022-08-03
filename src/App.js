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
          
          <h2>Form</h2>
          <h3>Name</h3>
          <input
            type="text"
            placeholder="Enter name"
            onChange={handleInputName}
          />
          <h3>Age</h3>
          <input
            type="Number"
            placeholder="Enter Age"
            onChange={handleInputAge}
          />

          <br />
          <h3>Location</h3>
          <input
            type="text"
            placeholder="Enter location"
            onChange={handleInputLocation}
          />
          <br />
          <h3>birth date</h3>
            <input
              type="date"
              
              
            />
            <br/>
            <h3>profile image</h3>
            <input type="file"/>
          </div>
          <br/>
          <div className="education">
            <br />
            <h3>School</h3>
            <input
              type="text"
              placeholder="Enter School/Institute Name"
              onChange={handleInputSchool}
            />
            
             
             <h3>Specialization</h3>
            <input
              type="text"
              placeholder="Enter Specialization"
              onChange={handleInputStream}
            />
            <br/>
            
        </div>
        <div className="result">
          <h2>Results</h2>
          <h3>
            {name} age {age} is from the {location}. He is studying {stream} at {school}.
          </h3>

          <h3>more details</h3>
          <h3>gender:</h3>
          <h2>birthdate:</h2>
          <h2>maragial staus:</h2>
          <h3>education</h3>
        </div>
      </div>
    </div>
  );
}

export default App;