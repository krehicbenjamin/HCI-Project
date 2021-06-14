import React, { Component } from 'react';
import {menuItems} from "./MenuItems";
import "./navbar.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Button} from "../Button/Button";
import image from "../../Images/bhpress1.png";

class Navbar extends Component {
    state = {
        click: false
    }

    //function for handling click
    handleClick = () => {
        this.setState({click: !this.state.click});
    }

    render() { 
        return ( 
        
            <nav className="navbar">
                <img src={image} alt="logo" className="navbar-logo"/>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "navigation-links active" : "navigation-links"}>    
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url} activeClassName = {"active-nav"}>
                                    <strong>{item.name}</strong> 
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>    
        
        );
    }
}
 // have to add responsive side bar instead of nav suing state
 //onClick = {this.handleClick} 
export default Navbar;