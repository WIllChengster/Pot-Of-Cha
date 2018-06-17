import React from 'react';
import "../assets/css/hero.css";
import { Route } from "react-router-dom";

import Navbar from './navbar';
import Home from './home';
import Menu from './menu';
import SocialMedia from './socialMedia';
import Locations from './locations';
import ContactUs from './contactUs';

const App = () => (
    <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/social" component={SocialMedia} />
        <Route path="/locations" component={Locations} />
        <Route path="/contact-us" component={ContactUs} />
    </div>
);

export default App;
