import React from 'react'
import '../App.css'

function Nav(props) {
    return (
        <div className="Nav">{props.headerLabel}</div>
    )
}

export default Nav;