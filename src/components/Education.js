import React from 'react'
import { resume } from './Resume'
import { Routes, Route,NavLink } from "react-router-dom";
import About from './About';
export default function Education() {
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
            <div className="Education">
                <h1 className='head'>Education</h1>
                <div className="box-0 m-5">
                    <div className="myclass" style={{ display: "grid", margin: "20px 150px", gridTemplateColumns: "auto auto" }}>
                        {resume.map(({ Data, College, percentage, icon }) => {
                            return (
                                <div>
                                    <h3> {Data}</h3>
                                    <h4>{College}</h4>
                                    {percentage}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
