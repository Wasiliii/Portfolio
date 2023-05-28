import project01 from "./../img/projects/01.jpg"
import project02 from "./../img/projects/02.jpg"
import project03 from "./../img/projects/03.jpg"
import project04 from "./../img/projects/04.jpg"
import project05 from "./../img/projects/05.jpg"
import project06 from "./../img/projects/06.jpg"
import projectBig01 from "./../img/projects/01-big.jpg"
import projectBig02 from "./../img/projects/02-big.jpg"
import projectBig03 from "./../img/projects/03-big.jpg"
import projectBig04 from "./../img/projects/04-big.jpg"
import projectBig05 from "./../img/projects/05-big.jpg"
import projectBig06 from "./../img/projects/06-big.jpg"

export interface projectProps {
    title?: string,
    skills: string,
    img: string,
    imgBig?: string,
    gitLink?: string}

export const projects: projectProps[]  = [
    {
        title : "Gaming streaming portal",
        skills: "React, Node.js, MongoDB",
        img: project01,
        imgBig: projectBig01,
        gitLink: "https://github.com"
    },
    {
        title : "Gaming streaming portal",
        skills: "React, Node.js, MongoDB",
        img: project02,
        imgBig: projectBig02,
        gitLink: "https://github.com"
    },
    {
        title : "Gaming streaming portal",
        skills: "React, Node.js, MongoDB",
        img: project03,
        imgBig: projectBig03,
        gitLink: "https://github.com"
    },
    {
        title : "Gaming streaming portal",
        skills: "React, Node.js, MongoDB",
        img: project04,
        imgBig: projectBig04,
        gitLink: "https://github.com"
    },
    {
        title : "Gaming streaming portal",
        skills: "React, Node.js, MongoDB",
        img: project05,
        imgBig: projectBig05,

    },
    {
        title : "Gaming streaming portal",
        skills: "React, Node.js, MongoDB",
        img: project06,
        imgBig: projectBig06,
        gitLink: "https://github.com"
    },
]