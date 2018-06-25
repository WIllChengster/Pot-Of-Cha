import React from 'react';
import '../assets/css/home.css'
import { Link } from 'react-router-dom';

export default () => {
    
    return(
        <div className="">
            <div className="jumbotron" >
                <div className="container">
                    <h1 className="display-4">Pot of Cha</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa quis et voluptatem repellendus quaerat! Nulla temporibus dolor, excepturi quos, molestiae ut cum ratione saepe esse omnis ullam obcaecati veniam?</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <Link to="/menu" className="col-3 bg-primary square">
                        <div>
                            <h3 className="text-white text-center">Check Out Our Menu</h3>
                        </div>
                    </Link>
                    <Link to="/locations" className="col-3 bg-dark square">
                        <h3 className="text-white text-center" >Find a Location</h3>
                    </Link>
                    <Link to="social" className="col-3 bg-info square">
                        <h3 className="text-white text-center">Follow Us!</h3>
                    </Link>
                    <Link to="/contact-us" className="col-3 bg-danger square">
                        <h3 className="text-white text-center">Any Questions?</h3>
                    </Link>
                </div>
                
            </div>

        </div>
    )
}