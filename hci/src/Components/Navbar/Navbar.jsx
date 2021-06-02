import React, { Component } from 'react';
import {menuItems} from "./MenuItems";
import "./navbar.css";
import {Button} from "../Button/Button";
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
                <h1 className="navbar-logo"><i class="fas fa-react"></i> BHPress </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "navigation-links active" : "navigation-links"}>    
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <strong>{item.name}</strong> 
                                </a>
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