import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../login.css"
import image from "../Images/bhpress1.png"

class Login extends Component {
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
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" required/>
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" required/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                    <div id="formFooter">
                    <Link className="underlineHover" to="/register">Don't have an account?</Link>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
 
export default Login;