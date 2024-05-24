import React from 'react';
import "./aboutMe.css";
import { Grid } from "@mui/material";

export default function AboutMe() {
    return (
        <div className={"aboutMe"} id={"aboutMe"}>
            <div className={"aboutMe-Component"}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={12} sm={12} md={4}>
                        <div className={"aboutMeLeft"}>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={12} md={8}>
                        <div className={"aboutMeRight"}>
                            <h1 className={"sub-title"}>About Me</h1>
                            <p className={"sub-content"}>
                                I'm currently employed as an engineer at <a href={"https://www.qualcomm.com/"}>Qualcomm,
                                India</a> and enrolled part-time in the PhD programme at&nbsp;
                                <a href={"https://www.bits-pilani.ac.in/goa/"}>BITS Pilani's K.K. Birla Goa Campus</a>.
                                Prior to this, I earned my M.E. in Computer Science from&nbsp;
                                <a href={"https://www.bits-pilani.ac.in/goa/"}>BITS Pilani's K.K. Birla Goa Campus
                                </a> and my B.Tech in Computer Science and Engineering from&nbsp;
                                <a href={"https://www.amity.edu/"}>Amity University, Noida</a>.
                                 As a full-stack developer, I have a strong interest for developing unique,
                                 user-friendly products that address pressing issues in the real world.
                                 My objective is to use my technological expertise to develop dependable,
                                 scalable solutions that provide benefit to end users.
                                 <br/>
                                 My research focus area is the nexus of computer science, electrical and electronics
                                engineering, ubiquitous computing and human computer interaction.
                            </p>
                            <p className={"thought"}>
                                Imagination is more important than knowledge. For knowledge
                                is limited, whereas imagination embraces the entire world, stimulating progress, giving
                                birth to evolution.<br/>
                                <span className={"thought-writer"}>~Albert Einstein</span>
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

