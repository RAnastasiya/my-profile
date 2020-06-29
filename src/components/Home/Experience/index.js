import React from 'react'
import { MdWork } from "react-icons/md";
import './index.css'


const  Experience = (props) => (
    <div className="experience-page">
        <div className="container">
            <div className="section-title">
                <div className="inline-icon">
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
                <div className="inline-icons-text inline-icon">Experience</div>
                <div className="inline-icon">
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
            </div>
            <div className="timeline">
                <div className="row">
                    <div className="left-content content">
                        <h3>Lacus Technologies</h3>
                        <h3>Front-End Developer</h3>
                    </div>
                    <div className="icon">
                        <MdWork />
                    </div>
                    <div className="right-content content">
                        <h3>MAY 2018 - now</h3>
                        <p>‒ Manual testing. Requirements analysis and requirement testing</p>
                        <p>‒ Functional, integration, regression, GUI, usability, localization testing</p>
                        <p>‒ Identifying, tracking and verifying project issues. Liaise with internal teams to
                            identify system requirements.</p>
                        <p>‒ Automation testing on Java. Use: JUnit, Selenuim, Appium, Selenium Grid,
                            Selenoid, Maven, Jenkins, Bitbucket</p>
                    </div>
                </div>
                <div className="row">
                    <div className="left-content content">
                        <h3>SANDSTORM</h3>
                        <h3>QA Automation Engineer</h3>
                    </div>
                    <div className="icon">
                        <MdWork />
                    </div>
                    <div className="right-content content">
                        <h3>09/2016 - MAY 2018</h3>
                        <p>‒ Test planning and test cases design.</p>
                        <p>‒ Automation new of tests for new and existing features with the following tools
                            or equivalent: Selenium & Python</p>
                        <p>‒ Automation new of tests for new and existing features</p>
                        <p>‒ Training of automation colleagues</p>
                        <p>‒ Use: Selenuim, Selenium Grid, Selene, Unittest, Docker, Git, Jenkins</p>
                    </div>
                </div>
                <div className="row">
                    <div className="left-content content">
                        <h3>HOTELS24.UA</h3>
                        <h3>QA Engineer</h3>
                    </div>
                    <div className="icon">
                        <MdWork />
                    </div>
                    <div className="right-content content">
                        <h3>09/2015 - 09/2016</h3>
                        <p>‒ Manual testing. Requirements analysis and requirement testing</p>
                        <p>‒ Functional, integration, regression, GUI, usability, localization testing</p>
                        <p>‒ Identifying, tracking and verifying project issues. Liaise with internal teams to
                            identify system requirements.</p>
                        <p> ‒ Automation testing on Java. Use: JUnit, Selenuim, Appium, Selenium Grid,
                            Selenoid, Maven, Jenkins, Bitbucket</p>
                    </div>
                </div>
                <hr className="bottom"/>
            </div>
        </div>
    </div>
);

export default Experience;