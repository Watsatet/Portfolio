import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import you from '../images/you.png'
export default function Home() {
    return (
        <>
            <div className="main tflex">
                <div className="me">
                    <img src={you} alt="" height={400} width={400} />
                </div>
                <div className="info">
                    <p>Hello,I'm</p>
                    <h1>MADHAV</h1>
                    <h2>FRONTEND DEVELOPER</h2>
                    <div className="btn">
                        <div className="down"><button><a download href="./Madhav.pdf">Download&nbsp;CV</a></button></div>
                        <div className="contact"><button><a href="/Contact">Contact&nbsp;Info</a></button></div>
                    </div>
                    <div className="link tflex">
                        <button><a href="https://www.linkedin.com/in/madhav7307"><img height="35" src={linkedin} alt="" /></a></button>
                        <button><a href="https://github.com/Watsatet"><img height="35" src={github} alt="" /></a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
