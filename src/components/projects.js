import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function Projects () {
    return(
        <div id="projects">
            <h1 className="page_title">Projects</h1>
            <p>All GA projects</p>
            <p><a href="https://set-aside.herokuapp.com/" target="_blank">Set Aside</a></p>
            <p><a href="https://pokemongofindthem.herokuapp.com/" target="_blank">Pokemon Go Find Them</a></p>
            <p><a href="https://gametrackersei.herokuapp.com/" target="_blank">Game Tracker</a></p>
            <p><a href="https://coreywilson319.github.io/" target="_blank">Blasterboy</a></p>
            <p>Projects after GA</p>
            <p><a href="https://rasta-imagery.herokuapp.com/" target="_blank">Rasta Imagery</a></p>
        </div>
    )
}

export default Projects