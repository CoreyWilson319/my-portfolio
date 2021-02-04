import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function Projects () {
    return(
        <div>
            <h1 className="page_title" id="projects">Projects</h1>
            <ul id="projects_list">
                <li>Rasta Imagery (WIP)</li>
                <li>Mental Health App (Need to start)</li>
                <li>All GA projects</li>
                <li><a href="https://set-aside.herokuapp.com/" target="_blank">Set Aside</a></li>
                <li><a href="https://pokemongofindthem.herokuapp.com/" target="_blank">Pokemon Go Find Them</a></li>
                <li><a href="https://gametrackersei.herokuapp.com/" target="_blank">Game Tracker</a></li>
                <li><a href="https://coreywilson319.github.io/" target="_blank">Blasterboy</a></li>
                {/* <li>Images of projects and explain the project</li> */}
                {/* Maybe use a carousell or someway to show things */}
            </ul>
        </div>
    )
}

export default Projects