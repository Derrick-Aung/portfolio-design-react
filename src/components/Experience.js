import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Experience extends Component {
    render() {
        return (
            <div>
                <div className="background-image">
                </div>
                <div className="primary-container">
                    <header className="container main-content">
                        <div className="subpage-main-content">
                        <h1>Experience</h1>
                        <span className="tag" id="tag-main">Volunteer</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti itaque, optio ea ex aut.</p>
                        </div>
                        <a href={process.env.PUBLIC_URL + '/'} className="return-bar">
                            <span className="return-text">RETURN TO FRONTPAGE</span>
                        </a>
                        
                    </header>
                    <section className="container secondary-content-subpage">
                    <div className="project-container">
                        <h2>Notable Achievements</h2>
                        <ul className="bulletpoints-conatiner">
                        <li className="bulletpoint">
                            <h4>2019 - Present</h4>
                            <h5>Teaching Facilitator at Real Time Learning Australia</h5>
                            <a href="https://www.rtlaustralia.com">Visit Real Time Australia Page</a>
                        </li>
                        <li className="bulletpoint">
                            <h4>2019 - Present</h4>
                            <h5>Kitchen Hand at The Gables</h5>
                            <p>MALVERN EAST VIC 3145</p>
                            <a href="http://www.thegables.com.au">Visit The Gables Page</a>
                        </li>
                        <li className="bulletpoint">
                            <h4>2019 - Present</h4>
                            <h5>IEEE Event Planner</h5>
                            <p>IEEE MONASH STUDENT BRANCH</p>
                            <a href="https://www.ieee.org">Visit The IEEE Page</a>
                        </li>
                        </ul>
                    </div>
                    </section>
                </div>
        
            </div>
        )
    }
}

export default Experience
