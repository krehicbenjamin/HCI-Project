import React from 'react';
import './sidecard.css';
function Sidecard({title, imageURL, time}){
    return(
        <div className='sidecard-container'>

            <div className="side-image-container">
                <img src={imageURL} alt="Image" />
            </div>

            <div className="sidecard-content">

                <div className="sidecard-title">
                    <h2>{title}</h2>
                </div>

                <div className="sidecard-time">
                    <p>{time}</p>
                </div>

            </div>
            
        </div>
        
    );

}

export default Sidecard;