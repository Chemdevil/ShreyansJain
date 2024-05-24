import React from 'react';
import "./home.css"
import Typewriter from 'typewriter-effect';
import EastIcon from '@mui/icons-material/East';
export default function Home() {
    return (
        <div className={"home"}>
            <div className={"profile-container active"} id={"home"}>
                <div className={"profile-parent"}>
                    <div className={'profile-details'}>
                        <div className={'colz'}>
                            <div className={"colz-icon"}>
                                <a href={'https://www.linkedin.com/in/shreyans-jain-07101996/'}>
                                    <i className={'fa fa-linkedin-square'}></i>
                                </a>
                                <a href={'https://github.com/Chemdevil'}>
                                    <i className={'fa fa-github-square'}></i>
                                </a>
                                <a href={'https://scholar.google.com/citations?user=SIdGdvEAAAAJ&hl=en'}>
                                    <i className="ai ai-google-scholar-square ai"></i>
                                </a>
                            </div>
                        </div>
                        <div className={"profile-details-name"}>
                    <span className={"primary-text"}>
                        {" "}
                        Hello, I'M <span className={"highlighted-text"}>Shreyans</span>
                    </span>
                        </div>
                        <div className={"profile-details-role"}>
                        <span className={"primary-text"}>
                            {" "}
                            <h1>
                                {" "}
                                <Typewriter
                                    options={{
                                        strings: ["Problem Solver 🪀", 'Full Stack Dev 😎','Researcher ⭐'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <span className={"profile-role-tagline"}>
                                Learn <EastIcon/> Think <EastIcon/> Build <EastIcon/> Repeat.
                            </span>
                        </span>
                        </div>
                        <div className={"profile-options"}>
                            <button className={"btn primary-btn"}>
                                {""}
                                Hire Me {" "}
                            </button>
                            <a href={"Resume.pdf"} download={"SJResume.pdf"}>
                                <button className={"btn highlighted-btn"}>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className={"profile-picture"} >
                        <div className={"profile-picture-background"}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
