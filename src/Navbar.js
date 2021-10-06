import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
            <div className="nav">
                <a className="active" href="#home">Home</a>
                <a href="#news">Boards And Programmer</a>
                <a href="#contact">Sensors And Module</a>
                <a href="#about">Electronic Components</a>
                <a href="#about">Power Supply</a>
                <a href="#about">Robotic</a>
                <a href="#about">Courses</a>
                <a href="#about">Information</a>
            </div>
    )
}

export default Navbar
