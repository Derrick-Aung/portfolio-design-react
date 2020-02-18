import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Skills extends Component {
    render() {
        return (
            <div>
                <div>
                    <div class="background-image">
                    </div>
                    
                </div>
                <div class="primary-container">
                    <header class="container main-content">
                        <div class="subpage-main-content">
                        <h1>Skills</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, dolorem?</p>
                        </div>
                        
                        <a href={process.env.PUBLIC_URL + '/'} className="return-bar">
                            <span class="return-text">RETURN TO FRONTPAGE</span>
                        </a>                          
                       
                    </header>
                    <section class="container secondary-content-subpage">
                        <div class="project-container">
                            <h2>Skills &amp; Technologies</h2>
                            <div class="skills-container">
                                <div class="skill-subcontainer">
                                    <p>MATLAB</p>
                                    <img class="skills-logo" src={require('../resources/img/matlab_logo.png')} alt=""/>
                                </div>
                                <div class="skill-subcontainer">
                                    <p>C</p>
                                    <img class="skills-logo" src={require('../resources/img/c_logo.png')} alt=""/>
                                </div>
                                <div class="skill-subcontainer">
                                    <p>ARDUINO</p>
                                    <img class="skills-logo" src={require('../resources/img/arduino_logo.png')} alt=""/>
                                </div>
                                <div class="skill-subcontainer">
                                    <p>CSS, HTML, JAVASCRIPT</p>
                                    <img class="skills-logo" src={require('../resources/img/html_css_js_logo.png')} alt=""/>
                                </div>
                                <div class="skill-subcontainer">
                                    <p>MATLAB</p>
                                    <img class="skills-logo" src={require('../resources/img/matlab_logo.png')} alt=""/>
                                </div>
                                <div class="skill-subcontainer">
                                    <p>C</p>
                                    <img class="skills-logo" src={require('../resources/img/c_logo.png')} alt=""/>
                                </div>
                                <div class="skill-subcontainer">
                                    <p>ARDUINO</p>
                                    <img class="skills-logo" src={require('../resources/img/arduino_logo.png')} alt=""/>
                                </div>
                                <div class="skill-subcontainer">
                                    <p>CSS, HTML, JAVASCRIPT</p>
                                    <img class="skills-logo" src={require('../resources/img/html_css_js_logo.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Skills
