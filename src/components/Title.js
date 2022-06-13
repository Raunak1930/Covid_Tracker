import React from 'react'
import logo from '../images/corona-logo2.gif'
function Title() {
    return (
        <div className="title">
            <img src={logo} alt="corona" className="title_logo" />
            <h1 className="title_name">Corona Tracker</h1>
        </div>
    )
}

export default Title
