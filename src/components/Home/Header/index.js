import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './index.css'

const  Header = (props) => (
    <div className="header">
        <header className="container">
            <Link className="main-link" to='/'>Anastasiya Rizhko</Link>
            <nav>
                <ul>
                    <li><NavLink to='/home'>About</NavLink></li>
                    <li><NavLink to='/experience'>Education</NavLink></li>
                    <li><NavLink to='/experience'>Experience</NavLink></li>
                    <li><NavLink to='/skills'>Skills</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    </div>
);

export default Header;
