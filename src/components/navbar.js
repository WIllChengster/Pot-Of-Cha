import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

export default () => {

    const navbarStyle = {
        backgroundColor: "#A28497",

    }
    const logoStyle={
        width: "25vw"
    }

    return(
        <div style={navbarStyle} className="navbar navbar-expand navbar-dark justify-content-around">
            <Link to="/menu" className="nav-item nav-link">Menu</Link>
            <Link to="/social" className="nav-item nav-link">Social Media</Link>
            <Link to="/" className="navbar-brand active">
                <img style={logoStyle} src={logo} alt="logo"/>
            </Link>
            <Link to="/locations" className="nav-item nav-link" >Locations</Link>
            <Link to="/contact-us" className="nav-item nav-link">Contact Us</Link>
        </div>
    )
}
