import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class About extends Component {
    render() {
        return (
            <div>
                <div class="background-image">
            
                </div>
                
                <div class="primary-container">
                    <header class="container main-content">
                        <div class="subpage-main-content">
                        <h1>About me</h1>
                        <span class="tag" id="tag-main">Hackathon Fanatic</span>
                        <span class="tag" id="tag-main">Problem Solver</span>
                        <span class="tag"  id="tag-main">Electronics Enthusiast</span>
                        <p>An aspiring and self-driven Electrical and Computer Systems Engineer always keen to learn and build positive life outcome.</p>
                        </div>
            
                        <a href={process.env.PUBLIC_URL + '/'} className="return-bar">
                            <span class="return-text">RETURN TO FRONTPAGE</span>
                        </a>
                        
                    </header>
                        <section class="container secondary-content-subpage">
                        <div class="project-container">
                            <h2>Notable Achievements</h2>
                            <ul class="bulletpoints-conatiner">
                            <li class="bulletpoint">
                                <h4>2019</h4>
                                <h5>Won First Place in Hippocratic Hackathon, held by MUBES</h5>
                                <p>UNIVERSITY OF MELBOURNE</p>
                            </li>
                            <li class="bulletpoint">
                                <h4>2019</h4>
                                <h5>Participated Hardware Hackathon</h5>
                                <p>MONASH UNIVERSITY, CLAYTON CAMPUS</p>
                            </li>
                            <li class="bulletpoint">
                                <h4>2017 - Present</h4>
                                <h5>Faculty of Engineering Dean's Honor List</h5>
                                <p>MONASH UNIVERSRITY</p>
                            </li>
                            <li class="bulletpoint">
                                <h4>2016 - 2018</h4>
                                <h5>Monash University Higher Achiever Award Scholarship</h5>
                                <p>MONASH UNIVERSRITY, MALAYSIA CAMPUS</p>
                            </li>
                            <li class="bulletpoint">
                                <h4>2015 - 2016</h4>
                                <h5>Jeffrey Cheah Entrance Scholarship</h5>
                                <p>MONASH COLLEGE, SUNWAY CAMPUS</p>
                            </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default About
