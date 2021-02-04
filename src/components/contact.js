import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Resume from "../resources/Resume.pdf"


function Contact () {
    return(
        <div>
            <h1 className="page_title">Contact Info</h1>
            <ul className="contact_info">
                <li>Corey Wilson</li>
                <li>Phone: 734-552-1955</li>
                <li><a href={Resume} target="_blank">Resume</a></li>
                <li>Email: coreywilson319@gmail.com </li>
                <li>Location: Romulus, Michigan</li>
                <li>Github: <a href="https://github.com/CoreyWilson319" target="_blank">CoreyWilson319</a></li>
            </ul>
        </div>
    )
}

export default Contact