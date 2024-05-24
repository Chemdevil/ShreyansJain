import React from 'react';
import "./Topbar.css"
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import {Mail, Person} from "@mui/icons-material";

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"top-bar "+(menuOpen && "active")}>
            <div className={"wrapper"}>
                <div className={"left"}>
                    <a href={"#home"}><AllInclusiveIcon className={"logo"}/></a>
                    <div className={"itemContainer"}>
                        <Person className="icon" />
                        <span>+91-9024884302</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>shreyansj00@gmail.com</span>
                    </div>
                </div>
                <div className={"right"}>
                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

