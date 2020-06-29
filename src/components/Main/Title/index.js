import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const  Title = (props) => (
    <div className="title" style={{top: (document.documentElement.clientHeight/2) -180 }}>
        <div className="intro">
            <div className="start">Hello, my name is Rizhko Anastasiya and I am</div>
            <h1>Front End Developer</h1>
            <div className="start">creating modern and responsive Application</div>
        </div>
        <Link to='/home'>
            <div className="scroll-down">
                <div className="arrow">
                    <span/>
                </div>
            </div>
        </Link>
    </div>
);

export default Title;
