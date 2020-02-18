import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount (){
        const script = document.createElement("script");
        script.src = require("../effects/typewrite");
        script.async = true;
        document.body.appendChild(script); 
    }

    componentWillUnmount(){
    }

    render() {
        return (
            <div>
                
                <div className="primary-container">
                    <header className="container main-content">
                        <h1> John Doe,&nbsp;
                            <span className="txt-type" data-wait="2000" data-words='[ "Engineer", "Designer", "Developer"]'>
                            </span>
                        </h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sed eius facere, expedita dignissimos animi corrupti pariatur consectetur repellendus qui fuga voluptas amet velit natus iure deserunt assumenda iusto commodi.</p>
                        <div className="link-container">
                        <ul className="links">
                            <li>
                                <Link to="/" className="link" id="current-page">Home</Link>
                            </li>
                            <li>
                                <Link to="/work" className="link">My Work</Link>
                            </li>
                            <li>
                                <Link to="/experience" className="link">Experience</Link>
                            </li>
                            <li>
                                <Link to="/skills" className="link">Skills</Link>
                            </li>
                            <li>
                                <Link to="/about" className="link">About me</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="icon-bar">
                        <a href="#">
                            <i className="la la-linkedin-square la-2x"></i>
                        </a>
                        <a href="#">
                            <i className="la la-phone la-2x"></i>
                        </a>
                        <a href="#">
                            <i className="la la-envelope la-2x"></i>
                        </a>
                        </div>
                    </header>
                    <section className="secondary-content">
                    
                    <Link to="/projects/example-project">
                        <div className="box-1">
                        <h3>Project 1</h3>
                        <span className="tag">Engineering</span>
                        <span className="tag">Robotics</span>
                        <span className="tag">Electricity</span>
                        </div>
                    </Link>

                    <Link to="/projects/example-project">
                        <div className="box-2">
                        <h3>Project 2</h3>
                        <span className="tag">Engineering Design</span>
                        </div>
                    </Link>

                    <Link to="/projects/example-project">
                        <div className="box-3">
                        <h3>Project 3</h3>
                        <span className="tag">Engineering Design</span>
                        </div>
                    </Link>
                    
                    <Link to="/projects/example-project">
                        <div className="box-4">
                        <h3>Project 4</h3>
                        <span className="tag">Engineering Design</span>
                        </div>
                    </Link>
                    
                    </section>
                </div>
                
                
            </div>
        )
    }
}

export default Home
