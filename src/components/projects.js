import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function Projects () {
    return(
        <div>
            <h1 className="page_title">Projects</h1>
            <p>Cleo's Site (Need to finish)</p>
            <p>Mental Health App (Need to start)</p>
            <p>My own twist on the budgeting app we made</p>
            <p>All GA projects</p>
            <p><a href="https://set-aside.herokuapp.com/" target="_blank">Set Aside</a></p>
            <p><a href="https://pokemongofindthem.herokuapp.com/" target="_blank">Pokemon Go Find Them</a></p>
            <p><a href="https://gametrackersei.herokuapp.com/" target="_blank">Game Tracker</a></p>
            <p><a href="https://coreywilson319.github.io/" target="_blank">Blasterboy</a></p>
            <p>Images of projects and explain the project</p>
        </div>
    )
}

export default Projects