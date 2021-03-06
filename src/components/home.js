import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function Home () {
    return(
        <div>
            <h1 className="page_title">Home</h1>
            <p className="brand_statement">Brand Statement</p>
            <p className="skills">Skills</p>
            <ul className="contact_info">
                <li>Contact Info</li>
                <li>Corey Wilson</li>
                <li>Phone: 734-552-1955</li>
                <li>Email: coreywilson319@gmail.com </li>
                <li>Location: Romulus, Michigan</li>
            </ul>
        </div>
    )
}

export default Home