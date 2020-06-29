import React from 'react'
import { FaUser, FaBirthdayCake } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import './index.css'



const  About = (props) => (
    <div className="about-page">
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
                <div className="inline-icons-text inline-icon">About</div>
                <div className="inline-icon">
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
            </div>
            <p className="text-center">Meticulous web developer with over 2 years of front end experience and passion
                for responsive website design. Professional experience goes through years of successfully developing
                and unit testing using modern tools, techniques and solid principles. </p>
            <div className="row">
                <div className="left-services">
                    <div className="service">
                        <div>
                            <h3>FULL NAME</h3>
                            <p>Anastasiya Rizhko</p>
                        </div>
                        <div className="service-icon"><FaUser/></div>
                    </div>
                    <div className="service">
                        <div>
                            <h3>BIRTHDAY</h3>
                            <p>30 Oct, 1991</p>
                        </div>
                        <div className="service-icon"><FaBirthdayCake/></div>
                    </div>
                    <div className="service">
                        <div>
                            <h3>BIRTH PLACE</h3>
                            <p>Dnipro, Ukraine</p>
                        </div>
                        <div className="service-icon"><MdLocationOn/></div>
                    </div>
                </div>
                <div className="photo-services" style={{backgroundImage: 'url("./assets/my-photo.png")'}}/>
                <div className="right-services">
                    <div className="service">
                        <div>
                            <h3>ADDRESS</h3>
                            <p>Dnipro, Ukraine</p>
                        </div>
                        <div className="service-icon"><MdLocationOn/></div>
                    </div>
                    <div className="service">
                        <div>
                            <h3>PHONE</h3>
                            <p>+38 093 373 16 66</p>
                        </div>
                        <div className="service-icon"><MdPhone/></div>
                    </div>
                    <div className="service">
                        <div>
                            <h3>EMAIL ADDRESS</h3>
                            <p>rizhko.anastasiya@gmail.com</p>
                        </div>
                        <div className="service-icon"><MdEmail/></div>
                    </div>
                </div>
            </div>
            <p className="text-center">RESUME is a Premium bootstrap based theme created by ThemifyCloud. The download
                includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS
                stylesheets for easy customization. Whether you're a student looking to showcase your work, a
                professional looking to attract clients, or a graphic artist looking to share your projects, this
                template is the perfect each business!</p>
        </div>
    </div>
);

export default About;