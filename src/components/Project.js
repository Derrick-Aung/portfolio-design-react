import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Project extends Component {
    render() {
        return (
            <div>
            <div class="background-image">
        
            </div>
            
            <div class="primary-container">
                <header class="container main-content">
                    <div class="subpage-main-content">
                    <h1>Ultrasonic Distance Meter</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, dolorem?</p>
                    </div>
                    <a href={process.env.PUBLIC_URL + '/'} className="return-bar">
                        <span class="return-text">RETURN TO FRONTPAGE</span>
                    </a> 
                    
                </header>
                <section class="container secondary-content-subpage">
                <div class="project-container">
                    <img src={require("../resources/img/heartrate_sensor.jpg")} alt="" class="project-img"></img>
                    <p class="project-img-desc">Heart Rate Sensor</p>
                    <h2>Purpose</h2>
                    <p>This device measures the distance of objects using the time of flight of ultrasonic waves. Using the same principle as echolocation it measures the time taken for the ultrasonic signal being transmitted and returned. The distance is obtained by taking the product the speed of sound and the time is taken (one-way). The sensor being used have a reliable range of 3 - 35 cm and an accuracy error of +/- 3mm.</p>
                    <h2>Problem</h2>
                    <p>This device measures the distance of objects using the time of flight of ultrasonic waves. Using the same principle as echolocation it measures the time taken for the ultrasonic signal being transmitted and returned. The distance is obtained by taking the product the speed of sound and the time is taken (one-way). The sensor being used have a reliable range of 3 - 35 cm and an accuracy error of +/- 3mm.</p>
                    <h2>Solution</h2>
                    <p>This device measures the distance of objects using the time of flight of ultrasonic waves. Using the same principle as echolocation it measures the time taken for the ultrasonic signal being transmitted and returned. The distance is obtained by taking the product the speed of sound and the time is taken (one-way). The sensor being used have a reliable range of 3 - 35 cm and an accuracy error of +/- 3mm.</p>
                </div>
                </section>
            </div>
            </div>
        )
    }
}

export default Project
