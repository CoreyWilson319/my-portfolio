import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Contact from "./contact"

function Skills() {
    return (
        <div>
            <h1 className="page_title" id="skills">Skills</h1>
            <ul id="skills_list">
                <li>General Customer Service</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>HTML</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>Django</li>
            </ul>
        </div>
    )
}

export default Skills