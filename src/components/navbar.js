import React from 'react';
import { Link } from "react-router-dom";

export default () => {
    return(
        <div className="navbar navbar-expand navbar-dark bg-dark justify-content-around">
            <Link to="/menu" className="nav-item nav-link">Menu</Link>
            <Link to="/social" className="nav-item nav-link">Social Media</Link>
            <Link to="/" className="navbar-brand active">Pot Of Cha</Link>
            <Link to="/locations" className="nav-item nav-link" >Locations</Link>
            <Link to="/contact-us" className="nav-item nav-link">Contact Us</Link>
        </div>
    )
}