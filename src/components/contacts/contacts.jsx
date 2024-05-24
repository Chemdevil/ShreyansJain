import React from 'react';
import "./contacts.css"
import {Grid} from "@mui/material";

export default function Contacts() {
    return (
        <div className={"contacts"}>
            <div className={"contact-Component"}>
                <Grid container columns={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Grid container columns={12}>
                            <Grid item xs={12} className={"sendMessage"}>
                                <div style={{marginTop: "2vh"}}>
                                    Send A Message
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={"contact-form"}>
                                    <form action={"#"} method={"POST"} className={"contact-inputs"} enctype="text/plain" >
                                        <input type={"text"} name={"username"} placeholder={"Name"}
                                               autoComplete={"off"} required={true} />
                                        <input type={"email"} name={"Email"} placeholder={"Email"}
                                               autoComplete={"off"} required={true}/>
                                        <textarea name={"message"} cols={"30"} rows={"6"} autoComplete={"off"}
                                                  required={true}></textarea>
                                        <input type={"submit"} value={"send"}/>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Grid container columns={12}>
                            <Grid item xs={12} className={"getInTouch"}>
                                <div style={{marginTop: "2vh"}}>
                                    Get in Touch
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{
                                padding: "3vh",
                                marginTop: "2vh",
                                fontSize: "1rem",
                                display: "flex",
                                textAlign: "justify",
                                textJustify: "inter-word",
                                color: "#fff"
                            }}>
                                <p className="lead">
                                    Whether you want to get in touch, talk about a project
                                    collaboration, or just say hi, I'd love to hear from
                                    you.
                                    <br/>
                                    Simply fill the from and send me an email.
                                </p>
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}
