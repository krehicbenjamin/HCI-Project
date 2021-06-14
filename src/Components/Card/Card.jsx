import React from 'react';
import {Link} from 'react-router-dom';
import './card.css';
function Card({title, imageURL, body}){
    return(
    <Link className ="card-link" to="/article">
        <div className='card-container'>

            <div className="image-container">
                <img src={imageURL} alt="Image" />
            </div>

            <div className="card-content">

                <div className="card-title">
                    <h2>{title}</h2>
                </div>

                <div className="card-body">
                    <p>{body}</p>
                </div>

            </div>
            
        </div>
        </Link>

    );

}

export default Card;