import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BiotechIcon from "@mui/icons-material/Biotech";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import React from "react";
import c_plus_plus from "../../assets/skills/c-plus-plus.svg";
import python from "../../assets/skills/python.png";
import java from "../../assets/skills/java.png";
import js from "../../assets/skills/js.png";
import mysql from "../../assets/skills/mysql.png";
import C from "../../assets/skills/C.png";
import html from "../../assets/skills/html.png";
import react from "../../assets/skills/react.png";
import node from "../../assets/skills/nodejs.png";
import fastAPI from "../../assets/skills/fastAPI.png";
import flask from "../../assets/skills/flask.png";
import cicd from "../../assets/skills/CI-CD.png";
import docker from "../../assets/skills/docker.png";
import git from "../../assets/skills/git.png";
import rancher from "../../assets/skills/icon-rke.png";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionDetails from "@mui/material/AccordionDetails";


export const menuIconLabel = [
    {icon: <WorkIcon/>, label: "Work Experience", href: "#", className: "workExperience"},
    {icon: <SchoolIcon/>, label: "Education", href: "#", className: "education"},
    {icon: <SettingsAccessibilityIcon/>, label: "Skills", href: "#", className: "skills"},
    {icon: <AccountTreeIcon/>, label: "Projects", href: "#", className: "projects"},
    {icon: <BiotechIcon/>, label: "Research Papers & Conferences", href: "#", className: "papers"},
    {icon: <CardMembershipIcon/>, label: "Certification", href: "#", className: "certificates"}
];
export const workExperience = [
    {
        Role: "Engineer",
        Organization: "Qualcomm India Pvt. Ltd.",
        Duration: "July 2022 - Now",
        href: "https://www.qualcomm.com/"
    },
    {
        Role: "Software Engineering Intern",
        Organization: "Qualcomm India Pvt. Ltd.",
        Duration: "Jan 2022 - July 2022",
        href: "https://www.qualcomm.com/"
    },
    {
        Role: "Teaching Assistant",
        Organization: "BITS Pilani K. K. Birla Goa Campus",
        Duration: "August 2021 - December 2021",
        href: "https://www.bits-pilani.ac.in/goa/"
    },
    {
        Role: "Teaching Assistant",
        Organization: "BITS Pilani K. K. Birla Goa Campus",
        Duration: "January 2021 - May 2021",
        href: "https://www.bits-pilani.ac.in/goa/"
    },

];
export const educationContent=[
    {
        title:"Doctor of Philosophy (PhD)",
        college:"BITS Pilani K.K. Birla Goa Campus, Goa, India",
        status:"Started, August 2023"
    },
    {
        title:"Master of Engineering (M.E.)",
        college:"BITS Pilani K.K. Birla Goa Campus, Goa, India",
        status:"Completed, 2022"
    },
    {
        title:"Bachelor of Technology (B.Tech)",
        college:"Amity School of Engineering and Technology, Noida, India",
        status:"Completed, 2020"
    },
    {
        title:"Class XII",
        college:"National Academy Day Boarding E.M.S, Alwar (Raj.)",
        status:"Completed, 2015"
    },
    {
        title:"Class X",
        college:"National Academy Day Boarding E.M.S, Alwar (Raj.)",
        status:"Completed, 2013"
    }
];

export const skillsContent = [
    {
        title: "Languages and Databases",
        icons: [
            {
                "icon": c_plus_plus,
                "title": "C++"
            },
            {
                "icon": python,
                "title": "Python"
            },
            {
                "icon": java,
                "title": "Java"
            },
            {
                "icon": js,
                "title": "JS"
            },
            {
                "icon": mysql,
                "title": "MySql"
            },
            {
                "icon": C,
                "title": "C"
            },
            {
                "icon": html,
                "title": "HTML"
            }
        ]
    },
    {
        title:"Frameworks & Technologies",
        icons: [
            {
                "icon": react,
                "title": "React"
            },
            {
                "icon": node,
                "title": "NodeJS"
            },
            {
                "icon": fastAPI,
                "title": "Fast API"
            },
            {
                "icon": flask,
                "title": "Flask"
            }
        ]
    },
    {
        title:"Tools & Platforms",
        icons: [
            {
                "icon": cicd,
                "title": "CI-CD"
            },
            {
                "icon": docker,
                "title": "Docker"
            },
            {
                "icon": git,
                "title": "Git"
            },
            {
                "icon": rancher,
                "title": "Rancher"
            },
        ]
    }
]
export const projectContent = [
    {
        title:"SMART PARKING SYSTEM",
        description: <ol type={"a"}>
            <li>Designing a smart parking system that will be able to provide real time parking status of parking space on a web application that
                can be accessed from anywhere and on any device.</li>
            <li>MQTT Protocol used for publishing and subscribing.</li>
        </ol>
    },
    {
        title:"ACTIVITY DETECTION",
        description: <ol type={"a"}>
            <li>Design a system that uses the accelerometer, linear accelerometer, and gyroscope sensors found in mobile phones to detect the activity being performed.</li>
        </ol>
    },
    {
        title:"CREDIT CARD FRAUD DETECTION",
        description: <ol type={"a"}>
            <li>Designed a hybrid credit card fraud detection learning mechanism using unsupervised and supervised methods for effective
                detection of fraudulent transactions.
            </li>
        </ol>
    },
    {
        title:"FILE ENCRYPTION SYSTEM",
        description: <ol type={"a"}>
            <li>Designed a Secured File System that can store the data on an untrusted server securely. The file system uses Digital Signature,
                AES, and RSA algorithms for security
            </li>
        </ol>
    },
    {
        title:"EVENT STUDY",
        description: <ol type={"a"}>
            <li>For understanding the impact of variation of Sensex in the stock value of companies using statistical models(Market Model,
                Mean adjusted Model, Market adjusted Model)
            </li>
        </ol>
    }
]

export const publicationsData = [
    {
        title: "Shreyans Jain, Nishant Verma, Rashid Ahmed, Aman Tayal, and Hemant Rathore. Credit Card Fraud Detection using K-Means Combined with Supervised Learning in 21st Hybrid Intelligence System (HIS’21), Springer Publishing.",
        Abstract: "The last decade has witnessed incredible growth in the credit card ecosystem, changing the dynamics of payment mechanisms. Credit cards provide ease of use and security to the customers, but there are various challenges in the domain. Recently, the surge in fraudulent cases involving credit cards has led to an increased risk of online transactions. Various financial institutions and researchers are trying to mitigate this problem by detecting fraudulent transactions. Therefore, we propose a novel approach by combining clustering and classification algorithms to identify credit card fraudulent transactions with high performance. The proposed system uses K-Means algorithms for clustering followed by different classification algorithms to construct the state-of-the-art credit-card fraud detection system. The proposed system based on random forest achieved the highest precision of 99.94%, recall 99.94%, F1-score 99.93%, and accuracy 99.9%.",
        id: "p1",
        doi: "https://doi.org/10.1007/978-3-030-96305-7_25"
    }
]

export const conferences = [
    {
        title: "21th International Conference on Hybrid Intelligent Systems (HIS 2021)",
        role: "Published a paper that proposed system uses K-Means algorithms for clustering followed by different " +
            "classification algorithms to construct the state-of-the-art credit-card fraud detection system " +
            "in the conference."
    }, {
        title: "Confluence-2018 : 8th International Conference on Cloud Computing, Data Science & Engineering",
        role: "Member of the organizing committee for CONFLUENCE-2018. The role was to coordinate with the guest speakers and to schedule\n" +
            "their paper presentation."
    },
    {
        title: "Technology Based Entrepreneurship Development Program conducted by -  Ministry of Micro, Small &\n" +
            "Medium Enterprises",
        role: "Workshop provided detailed information on entrepreneurship, with frequent interaction from Entrepreneurs, " +
            "members of financial institutions and relevant projects."
    }
]
export const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#000",
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));
export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '1rem', color: "var(--dark-orange)"}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
        color: "var(--dark-orange)",
        fontSize: "1rem",
        fontFamily: "Roboto",
        fontWeight: "800"
    },
}));
export const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid #808080',
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: "0.8rem",
}));


