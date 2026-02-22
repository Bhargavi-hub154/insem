import React ,{useState} from "react";
import ProfileCard from "./Components/ProfileCard";
import "./App.css";
import HeaderBar from "./Components/HeaderBar";

function App(){
  const [status , setStatus] = useState("Active");
   return(
    <div className = "page">
        <div className = "card">
      <h2>Profile card</h2>

      <ProfileCard name = "Bhargavi" Age = "25 years"/>
      <h1>Bio</h1>
      <p id = "Bio">
      My name is Bhargavi and welcome to my profile card where you can find all the information about me.</p>
         <p id = "Bio">
       I am a student and I am currently pursuing my degree in Computer Science. 
       I have a passion for coding and I am always eager to learn new technologies.</p>
       <p id = "Bio">
        In my free time, I enjoy reading books, watching movies, and spending time with my friends and family. 
        Thank you for visiting my profile card!</p>

      <HeaderBar status = {status} setStatus = {setStatus}/>
      </div>

    </div>

  );
}
export default App;