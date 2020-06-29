import React from 'react'
import Header from './Header'
import About from "./About";
import MyCV from "./MyCV";
import Education from "./Education";
import MyContact from "./MyContact";
import Experience from "./Experience";
import HireMe from "./HireMe";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import './index.css'



const  Home = (props) => (
    <div className="home-overlay">
        <Header />
        <About />
        <MyCV />
        <Education />
        <HireMe />
        <Experience />
        <MyContact />
        <Skills />
        <ContactForm />
    </div>
);

export default Home;
