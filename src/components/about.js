import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Contact from "./contact"

function About() {
    return (
        <div>
            <Contact />
            <h1 className="page_title" id="about">About Me</h1>
            <p id="about_content">My name is Corey Wilson. I was born and brought up in Michigan, am the eldest of three children, and was raised, nurtured, and strengthened by a single mother. Growing up in a single parent household developed my compassion, maturity, mental sharpness, and inventiveness. If given the chance to describe me, others would most likely refer to me as a "gentle giant", considering my 6’1 stature and my benevolent nature. Aside from being a gentle giant, I am also a recent graduate of General Assembly: Coding Bootcamp. Technology and science have always been impassioned interests of mine. My fervor for technology and science started at a young age with video games and desiring to know just how they worked. I eventually began self-teaching code languages and dismantling motherboards and other technological devices and equipment to see the inner workings of it all. I joined General Assembly to receive expert training in coding, web development, data, and design. After 480 hours of guided education and sleepless nights meeting deadlines, I believe that I am ready to share my skills with the world.</p>
        </div>
    )
}

export default About