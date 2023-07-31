import React from 'react';
import "./App.css";
import Home from "./components/home/home";
import Resume from "./components/Resume/resume";
import AboutMe from "./components/AboutMe/aboutMe";
import Contacts from "./components/contacts/contacts";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="app">
        <Topbar/>
        <div className={"sections"}>
            <Home/>
            <AboutMe/>
            <Resume/>
            <Contacts/>
        </div>
    </div>
  );
}

export default App;
