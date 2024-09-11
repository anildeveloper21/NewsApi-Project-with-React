import React from 'react'
import '../App.css'

const Navbar = ({setCategory}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <ul className="navbar-nav">
                            <li id='l1' className="nav-item">
                                <div className="nav-link active" onClick={() => setCategory("sports")}>Sports</div>
                            </li>
                            <li id='l2' className="nav-item">
                                <div className="nav-link active" onClick={() => setCategory("health")}>Health</div>
                            </li>
                           
                            <li id='l4' className="nav-item">
                                <div className="nav-link active" onClick={() => setCategory("politics")}>Politics</div>
                            </li>
                            <li id='l5' className="nav-item">
                                <div className="nav-link active" onClick={() => setCategory("education")}>Education</div>
                            </li>
                            <li id='l3' className="nav-item">
                                <div className="nav-link active" onClick={() => setCategory("entertainment")}>Entertainment</div>
                            </li>
                        </ul>
            </nav>
        </div>
    )
}

export default Navbar
