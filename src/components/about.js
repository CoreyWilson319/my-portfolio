import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Contact from "./contact"

function About() {
    return (
        <div>
            <Contact />
            <h1 className="page_title" id="about">About Me</h1>
            <p id="about_content">My name is Corey Wilson, I am a recent graduate of General Assembly. I'm the eldest of three children raised by a single mother off and on,
            being raised under these circumstances have molded me to be extremely protective. So much so that it may be seen as unsightly. If others were to describe me, you
             would probably hear the phrase a "gentle giant". Regarding the tech field, tech has always been something that I've found myself involved with in some capacity
            from video games as a child, to my first cell phone even to where I am now. I've been practicing reading and writing code for almost a year, and joined a code bootcamp
             to further my goals as well as to get the guidance I lacked self teaching. And after 480 hours of guided education and sleepless nights meeting deadlines. I believe that
             I am ready to share my skills with the world.</p>
        </div>
    )
}

export default About