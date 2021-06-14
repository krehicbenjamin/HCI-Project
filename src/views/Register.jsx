import React, { Component } from 'react';
import "../login.css"
import image from "../Images/bhpress1.png"
import {Link} from "react-router-dom"
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
                    <input type="text" id="login" className="fadeIn second" name="username" placeholder="Username"/>
                        <input type="text" id="login" className="fadeIn third" name="email" placeholder="Email"/>
                        <input type="text" id="password" className="fadeIn fourth" name="login" placeholder="Password"/>
                        <input type="text" id="password" className="fadeIn fifth" name="login" placeholder="Confirm password"/>
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