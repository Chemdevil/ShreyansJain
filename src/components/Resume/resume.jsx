import React, {useState} from 'react';
import "./resume.css";
import {Grid, Grow, Link, StepContent} from '@mui/material';
import {
    conferences,
    educationContent,
    menuIconLabel,
    projectContent,
    publicationsData,
    skillsContent,
    workExperience,AccordionSummary,AccordionDetails,Accordion
} from './constants';
import Typography from '@mui/material/Typography';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import Tooltip from "@mui/material/Tooltip";
import ArticleIcon from "@mui/icons-material/Article";


export default function Resume() {
    const [resumeMenu, setResumeMenu] = useState(false);
    const [selectedItem, setSelectedItem] = useState("workExperience");
    const headingTitles = {
        workExperience: "Work Experience",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
        papers: "Publications & Workshops",
        certificates: "Certificates"
    };
    const [expanded, setExpanded] = useState('publications');
    const [abstractVisibility, setAbstractVisbility] = useState(null);
    const accordianChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleChange = (value) => {
        setResumeMenu(!resumeMenu);
        setSelectedItem(value);
    };
    const headingContent = {
        workExperience: <Grid container columns={12} spacing={1}>
            <Grid item xs={6}>
                <Stepper orientation={"vertical"}>
                    {
                        (workExperience).map((experience) => (
                            <Grow in={true} style={{ transformOrigin: '0 0 0'}} timeout={1000}>
                                <Step completed expanded active>
                                    <StepLabel className={"stepHead"} StepIconComponent={CheckCircleOutlineIcon}>
                                                    <span className={"stepHeadTitle"}>
                                                        {experience.Role}
                                                    </span>
                                    </StepLabel>
                                    <StepContent className={"stepContentTitle"}>{experience.Organization}</StepContent>
                                    <StepContent className={"stepContentDate"}>{experience.Duration}</StepContent>
                                </Step>
                            </Grow>
                        ))
                    }
                </Stepper>
            </Grid>
        </Grid>,
        education: <Grid container columns={12}>
            <Grid item xs={6}>
                {
                    (educationContent.map((content)=>(
                        <Grow in={true} style={{ transformOrigin: '0 0 0'}} timeout={1000}>
                            <Grid container columns={12} className={"degreeComponent"}>
                                <Grid item xs={1}>
                                    <DataUsageIcon className={"educationBullet"}/>
                                </Grid>
                                <Grid item xs={10}>
                                    <div className={"degreeTitle"}>{content.title}</div>
                                    <div className={"degreeContent"}>{content.college}</div>
                                    <div className={"degreeContent"}>{content.status}</div>
                                </Grid>
                            </Grid>
                        </Grow>
                    )))
                }
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid>,
        skills: <Grid container columns={12} spacing={1} className={"skillContent"}>
            {
                (skillsContent).map((skill) => (
                    <>
                        <Grid item xs={12} className={"skillContentTitle"}>
                            {skill.title}
                        </Grid>
                        <br/>
                        {
                            (skill.icons).map((icon) => (
                                <Tooltip title={icon.title}>
                                    <Grow in={true} style={{ transformOrigin: '0 0 0'}} timeout={1000}>
                                        <Grid item xs={1.2}>
                                            <img
                                                className={"iconStyle"}
                                                src={icon.icon}
                                                alt={icon.title}
                                            />
                                        </Grid>
                                    </Grow>
                                </Tooltip>
                            ))
                        }
                        <br/><br/><br/>
                    </>
                ))
            }
        </Grid>,
        projects: <Grid container columns={12} spacing={0.5} className={"projectContent"}>
            {
                (projectContent).map((project) => (
                    <Grow in={true} style={{ transformOrigin: '0 0 0'}} timeout={1000}>
                        <Grid item xs={12}>
                            <Grid container columns={12}>
                                <Grid item xs={0.5} className={"projectIcon"}><ArticleIcon/></Grid>
                                <Grid item xs={11} className={"projectTitle"}>{project.title}</Grid>
                                <Grid item xs={12} className={"projectDescription"}>
                                    {project.description}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grow>
                ))
            }
        </Grid>,
        papers: <Grid container columns={12} spacing={0.5} className={"paperContent"}>
            <Accordion expanded={expanded === 'publications'}
                       onChange={accordianChange('publications')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography fontSize={"1.5rem"}>Publications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ol type={"P"}>
                        {
                            (publicationsData).map((publication) => (
                                <Grow in={true} style={{ transformOrigin: '0 0 0'}} timeout={1000}>
                                <li style={{
                                        display: "list-item",
                                        listStylePosition: "inside",
                                    fontSize:'1.2rem'
                                    }}>
                                                   <span>
                                                       {publication.title}
                                                   </span>
                                        <div><Link
                                            className={"publicationDOI"}
                                            href={publication.doi}
                                            target={"_blank"}>[DOI]</Link>&nbsp;&nbsp;
                                            <span className={"publicationAbstractButton"}
                                                  onClick={() =>
                                                      setAbstractVisbility(
                                                          publication.id !==
                                                          abstractVisibility ?
                                                              publication.id : null)}>
                                                                        [ABSTRACT]</span>
                                        </div>
                                        {(abstractVisibility === publication.id) && <div
                                            className={"publicationAbstract"}>
                                            {publication.Abstract}
                                        </div>}
                                    </li>
                                </Grow>
                                )
                            )
                        }
                    </ol>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'conference'}
                       onChange={accordianChange('conference')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography fontSize={'1.5rem'}>Conference and Workshops</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul type={"C"}>
                        {
                            (conferences).map((conference) => (
                                <Grow in={true} style={{ transformOrigin: '0 0 0'}} timeout={1000}>
                                    <li style={{
                                        display: "list-item",
                                        listStylePosition: "inside"
                                    }}>
                                                                <span style={{
                                                                    fontFamily: "Roboto",
                                                                    fontWeight: "500",
                                                                    color: "var(--dark-orange)",
                                                                    fontSize: "1.25rem"
                                                                }}>
                                                                    {conference.title}
                                                                </span>
                                        <div style={{
                                            paddingLeft: "2vh",
                                            paddingRight: "2vh",
                                            marginLeft: "3vh",
                                            fontSize: "1.2rem"
                                        }}>
                                            {conference.role}
                                        </div>
                                    </li>
                                </Grow>
                                )
                            )
                        }
                    </ul>
                </AccordionDetails>
            </Accordion>
        </Grid>,
        certificates: "Certificates"
    };


    return (
        <div className={"resume"} id={"resume"}>
            <div className={"resume-Component"}>
                <Grid container columns={12}>
                    <Grid item xs={0.5} sm={0.5} md={0.5}>
                        <div className={"resumeMenu"}>
                            <ul>
                                {menuIconLabel.map(menuitem => (
                                    <li style={{
                                        color: selectedItem === menuitem.className ? "white" : "var(--dark-orange)",
                                        transition: "all 1s ease"
                                    }}>
                                        <a href={menuitem.href}>
                                            <div item xs={1} onClick={() => handleChange(menuitem.className)}>
                                                {menuitem.icon}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={11} sm={11} md={10} style={{marginLeft: "5vh"}}>
                        <Grid item xs={12}>
                            <div className={"resume-detail"}>
                                <h1 className={"resume-detail-title"}>{headingTitles[selectedItem]}</h1>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={"resume-detail-content"}>
                                {headingContent[selectedItem]}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}