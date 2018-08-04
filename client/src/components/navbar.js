import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import "../assets/css/navbar.css"

export default () => {

    const navbarStyle = {
        backgroundColor: "white",
        fontFamily: "Pacifico, cursive"
    }
    const logoStyle={
        width: "20vw"
    }

    return(
        <div style={navbarStyle} className="navbar navbar-expand navbar-dark shadow ">
            <style>
                @import url('https://fonts.googleapis.com/css?family=Pacifico');
            </style>
            <Link to="/" className="navbar-brand active">
                <img style={logoStyle} src={logo} alt="logo"/>
            </Link>
            <Link to="/menu" className="nav-item nav-link h5 ">Menu</Link>
            <Link to="/social" className="nav-item nav-link h5 ">Social Media</Link>
            <Link to="/locations" className="nav-item nav-link h5 " >Locations</Link>
            <Link to="/contact-us" className="nav-item nav-link h5 ">Contact Us</Link>
        </div>
    )
}
