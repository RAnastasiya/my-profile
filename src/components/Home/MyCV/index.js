import React from 'react'
import { FaDownload } from 'react-icons/fa';
import './index.css'



const  MyCV = (props) => (
    <div className="my-sv" style={{backgroundImage: 'url("./assets/shutterstock_1378191401-1024x683.jpg")'}}>
        <div className="grey-area">
            <div className="download-cv"><FaDownload />Download My CV</div>
        </div>
    </div>
);

export default MyCV;