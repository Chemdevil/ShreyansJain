import React, {useState} from 'react';
import "./App.css";
import Home from "./components/home/home";
import Resume from "./components/Resume/resume";
import AboutMe from "./components/AboutMe/aboutMe";
import Contacts from "./components/contacts/contacts";
import Topbar from "./components/Topbar/Topbar";
import Projects from "./components/Projects/Projects";
import Menu from "./components/Menu/Menu";

function App() {
    const [menuOpen,setMenuOpen] =useState(false);
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className={"sections"}>
                <Home/>
                <AboutMe/>
                <Resume/>
                <Projects/>
                <Contacts/>
            </div>
        </div>
    );
}

export default App;
