import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Work extends Component {
    render() {
        return (
            <div>
            <div className="background-image">
        
    </div>
    
    <div className="primary-container">
        <header className="container main-content">
            <div className="subpage-main-content">
              <h1>My Work</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, dolorem?</p>  
            </div>
            
            <a href={process.env.PUBLIC_URL + '/'} className="return-bar">
                <span className="return-text">RETURN TO FRONTPAGE</span>
            </a> 
            
        </header>
        <section className="container secondary-content-subpage">
          <div className="project-container">
            <div className="link-container">
                <ul className="links">
                  <li>
                    <a className="link" href="#">
                        Ultrasonic Distance Meter
                    </a>
                  </li>
                  <li>
                    <a className="link" href="#">
                        HeartRate Sensor
                    </a>
                  </li>
                  <li>
                    <a className="link" href="#">
                        Pulse Width Modulation with Op-Amps
                    </a>
                  </li>
                  <li>
                    <a className="link" href="#">
                        Image stitching using homography
                    </a>
                  </li>
                  <li>
                      <a className="link" href="#">
                          Modubrace for Scoliosis Patient
                      </a>
                  </li>
                  <li>
                      <a className="link" href="#">
                          Anti-Sleep System
                      </a>
                  </li>
                  <li>
                      <a className="link" href="#">
                          Bite-by-Byte
                      </a>
                  </li>
                </ul>
              </div>
            </div>
            </section>
            </div>

    
            </div>
        )
    }
}

export default Work
