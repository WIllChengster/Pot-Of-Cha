import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import "../assets/css/navbar.css"

export default () => {

    const navbarStyle = {
        backgroundColor: "#A28497",
        fontFamily: "Pacifico, cursive"
    }
    const logoStyle={
        width: "20vw"
    }

    return(
        <div style={navbarStyle} className="navbar navbar-expand navbar-dark justify-content-around">
            <style>
                @import url('https://fonts.googleapis.com/css?family=Pacifico');
            </style>
            <Link to="/" className="navbar-brand active">
                <img style={logoStyle} src={logo} alt="logo"/>
            </Link>
            <Link to="/menu" className="nav-item nav-link h4 text-white">Menu</Link>
            <Link to="/social" className="nav-item nav-link h4 text-white">Social Media</Link>
            <Link to="/locations" className="nav-item nav-link h4 text-white" >Locations</Link>
            <Link to="/contact-us" className="nav-item nav-link h4 text-white">Contact Us</Link>
        </div>
    )
}
