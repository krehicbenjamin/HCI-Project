import React from 'react';
import {Link} from 'react-router-dom';
import './sidecard.css';
function Sidecard({title, imageURL, time}){
    return(
        <Link className ="card-link" to="/article">
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
        </Link>
    );

}

export default Sidecard;