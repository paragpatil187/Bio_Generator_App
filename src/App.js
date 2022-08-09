import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import axios from "axios"
import "./App.css";

function App() {
  const [name, setName] = useState("Parag");
  const [location, setLocation] = useState("vasheni");
  const [stream, setStream] = useState("Engineering");
  const [school, setSchool] = useState("GMVIT");
  const[age,setAge]=useState("")
  const[occupation,setOccupation]=useState("Engineer");
  const[religion,setReligion]=useState("Hindu")
  const[meeting,setMeeting]=useState("just conversation");
  const[image,setimage]=useState("./logo192.png");
  const [gender,setGender]=useState("male");
  const [to,setTo]=useState("");
  const[from,setForm]=useState("");
  const[output,setOutput]=useState("");
  
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
  const handleGender=(e)=>{
    setGender(e.target.value)
  }
  const generateRandomSchool=()=>{
    let schoolArray=["SCSMV","sant tukaram school","rayat school","GMVIT"]
    setSchool(schoolArray[Math.floor(Math.random()*4)])
    console.log()

  }
  const generateRandomName=()=>{
    let schoolArray=["Parag","Sattya","Deva","Rupesh"]
    setName(schoolArray[Math.floor(Math.random()*4)])
    

  }
  
  const generateRandomSpecialization=()=>{
    let schoolArray=["Science","Arts","commerce","Socialscience"]
    setStream(schoolArray[Math.floor(Math.random()*4)])
    

  }
  
  const generateRandomLocation=()=>{
    let schoolArray=["Pune","Mumbai","Nagpur","Raigad"]
    setLocation(schoolArray[Math.floor(Math.random()*4)])
    console.log()

  }
  
  const generateRandomOccupation=()=>{
    let OccuptionArray=["Engineer","Developer","businessman","Politacian"]
    setOccupation(OccuptionArray[Math.floor(Math.random()*4)])
    console.log()

  }
  const generateRandomReligion=()=>{
    let religionArray=["Hindu","sikh","jain","Buddhist"]
    setReligion(religionArray[Math.floor(Math.random()*4)])
    console.log()

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
console.log(gender)


  return (
    <div className="App" id="app">
       
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
            value={name}
            placeholder="Enter name"
            onChange={handleInputName}
          />
          <label>Gender</label>
          <select onChange={(e)=>handleGender(e)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button onClick={generateRandomName}>Random name</button>

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>Location</label>
            <input type="text" value={location} onChange={handleInputLocation}></input>
            <button onClick={generateRandomLocation}>Random Location</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>School</label>
            <input type="text" value={school} onChange={handleInputSchool}></input>
            <button onClick={generateRandomSchool}>Random School</button>
            <label>Specialization</label>
            <input type="text" value={stream}
             onChange={handleInputStream}></input>
            <button onClick={generateRandomSpecialization}>Random Specialization</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>Occupation</label>
            <input type="text" value={occupation} onChange={handleOccupation}></input>
            <button onClick={generateRandomOccupation}>Random Occupation</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label>Religious background</label>
            <textarea rows="5" cols="20" value={religion} onChange={handleReligion}></textarea>
            <button onClick={generateRandomReligion}>Random religion</button>
            

          </div>
          <div className="box">
          <input type="checkbox"></input>
            <label style={{verticalAlign:"middle",margin:"3px",marginBottom:"6px",padding:"0",color:"#222"}}>meeting reason</label>
            <textarea  className="textarea" rows="5" cols="20" value={meeting} onChange={handleMeeting}></textarea>
            <button className="selectbutton" onClick={()=>setMeeting("for peace of mind")}>For peace</button>
            <button className="selectbutton" onClick={()=>setMeeting("for personal reason")}>For personal reason</button>
            <button  className="selectbutton" onClick={()=>setMeeting("for payer to fill energetic ")}>For prayer</button>
            
            

          </div>
          </div>
          
          
          
          
          
           
          
            
            
             
            
            
        
        <div className="result" id="result">
          <h2 className="box">Result</h2>
         
          
          <div className="imagediv">
          {image?<img src={image} alt="profile photo" />:null}
          </div>
          
          <div className="box">
            {name}  is from the {location}.{gender=="male"? "He":"She"} is studying {stream} at {school}.his occupation is {occupation} 
            {gender=="male"? "his":"her"} religion is {religion} {gender=="male"? "He":"She"} meet you for {meeting}

          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;