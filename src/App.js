import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [stream, setStream] = useState("");
  const [school, setSchool] = useState("");
  const[age,setAge]=useState("")
  const[occupation,setOccupation]=useState("");
  const[religion,setReligion]=useState("")
  const[meeting,setMeeting]=useState("");
  const[image,setimage]=useState("")
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
  const handleOccupation=(e)=>{
    setOccupation(e.target.value)
  }
  const handleReligion=(e)=>{
    setReligion(e.target.value)
  }
  const handleMeeting=(e)=>{
    setMeeting(e.target.value)
  }
  const photoUpload=(e)=>{
  const reader=new FileReader()
  const file = e.target.files[0];
  reader.onloadend = () => {
    setimage(reader.result)
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }
  reader.readAsDataURL(file);
}



  return (
    <div className="App">
       
      <h1 className="heading">Bio - Generator</h1>
      <div className="container">
        <div className="option">

          
          <h2 className="box">Options</h2>
          <div className="box">
            <input type="checkbox">
             </input>
            <label>Profile photo</label>
          <input type="file" onChange={photoUpload}></input>
          </div>

          
          <div className="box">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={handleInputName}
          />
          <label>Gender</label>
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
            <input type="text" onChange={handleOccupation}></input>
            <button>Random Occupation</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>Religious background</label>
            <textarea rows="5" cols="20" onChange={handleReligion}></textarea>
            <button>Random religion</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>meeting reason</label>
            <textarea rows="5" cols="20" onChange={handleMeeting}></textarea>
            <button>For peace</button>
            <button>For personal reason</button>
            <button>For prayer</button>
            
            

          </div>
          </div>
          
          
          
          
          
           
          
            
            
             
            
            
        
        <div className="result">
          <h2 className="box">Result</h2>
          <div className="imagediv">
          <img src={image} />
          </div>
          
          <div className="box">
            {name}  is from the {location}. He is studying {stream} at {school}.his occupation is {occupation}
            his religion is {religion} He meet you for {meeting}

          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;