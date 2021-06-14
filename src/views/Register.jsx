import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../login.css"
import image from "../Images/bhpress1.png"

class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="centered">
            <div className ="wrapper fadeInDown">
                <div className="formContent">
                    <div className="fadeIn first">
                        <img src={image} id="icon" className="login_image" />
                    </div>
                    <form>
                    <input type="text" id="login" className="fadeIn second" name="username" placeholder="Username" minlength="3" maxlength="15" required/>
                        <input type="text" id="login" className="fadeIn third" name="email" placeholder="Email" required/>
                        <input type="text" id="password" className="fadeIn fourth" name="login" placeholder="Password" required/>
                        
                        <input type="submit" className="fadeIn sixth" value="Register"/>
                        
                    </form>
                    <div id="formFooter">
                    <Link className="underlineHover" to="/login">Have an account?</Link>
                    </div>
                </div>
            </div>
            </div>
            

         
            
        );
    }
}
 
export default Register;