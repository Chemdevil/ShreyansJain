import React from 'react';
import "./Menu.css";
export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")} id={"menu"}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#home"}>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#aboutMe"}>About Me</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#resume"}>Resume</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#projects"}>Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#contacts"}>Contact Me</a>
                </li>
            </ul>
        </div>
    );
}