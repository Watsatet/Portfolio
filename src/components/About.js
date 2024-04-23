import React from 'react'
import verified from '../images/verified.png'
import Education from './Education'
import { Routes, Route, NavLink } from "react-router-dom";
export default function About() {
    return (
        <>
            <div className='tflex'>
                <Routes>
                    <Route exact path="Education" element={<Education />} />
                    <Route exact path="About" element={<About />} />
                </Routes>
                <button className='btns'><NavLink to="/about">Skills</NavLink></button>
                <button className='btns'><NavLink to="/education">Education</NavLink></button>
            </div>
            <div className="skills tflex">
                <div>
                    <p>Explore My</p>
                    <h1>Technical Skills</h1>
                </div>
                <div className="tflex">
                    <div className="box">
                        <h2>Frontend Development</h2>
                        <div className="box-1">
                            <div><img src={verified} alt="" />&nbsp;<h3>HTML</h3>
                            </div>
                            <div><img src={verified} alt="" />&nbsp;<h3>CSS</h3>
                            </div>
                            <div><img src={verified} alt="" />&nbsp;<h3>JAVASCRIPT</h3>
                            </div>
                            <div><img src={verified} alt="" />&nbsp;<h3>BOOTSTRAP</h3>
                            </div>
                            <div><img src={verified} alt="" />&nbsp;<h3>TAILWIND</h3>
                            </div>
                            <div><img src={verified} alt="" />&nbsp;<h3>REACT-JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h2>Programming Lanugage</h2>
                        <div className="box-1">
                            <div><img src={verified} alt="" />&nbsp;<h3>JAVA</h3>
                            </div>
                            <div><img src={verified} alt="" />&nbsp;<h3>NODE-JS</h3>
                            </div>
                        </div>
                        <h2>Database</h2>
                        <div className="box-1">
                            <div><img src={verified} alt="" />&nbsp;<h3>MY SQL</h3>
                            </div>
                            <div><img src={verified} alt="" />&nbsp;<h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
