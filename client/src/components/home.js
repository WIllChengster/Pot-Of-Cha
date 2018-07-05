import React from 'react';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';
import Carousel from './carousel';
import logoSub from '../assets/images/logoSub.png';
export default () => {

    const green = { backgroundColor: "#92C44B" };
    const gray = { backgroundColor: "#646F58" };
    const brownish = { backgroundColor: "#C6AE82" };
    const orange = { backgroundColor: "#F4D06F" };
    const kaki = { backgroundColor: "#DDE392" }
    const newsPic = {
        display: "block",
        width: "50vw",
        margin: "auto",
    }

    return (
        <div>
            <Carousel />
            <div className="container">
                <div className="card my-2">
                    <div className="card-header text-center displayFont">News</div>
                    <div className="card-body">
                        <h5 className="card-title">Grand Opening!</h5>
                        <img style={newsPic} src={logoSub} alt="logo" />
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde nisi libero aut eligendi fugiat laboriosam ad ex aspernatur ut, excepturi deleniti autem obcaecati velit magnam commodi cum, totam animi!</p>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <Link style={green} to="/menu" className="col-3 square">
                        <div>
                            <h4 className="text-white text-center">Check Out Our Menu</h4>
                        </div>
                    </Link>
                    <Link style={kaki} to="/locations" className="col-3 square">
                        <h4 className="text-white text-center" >Find a Location</h4>
                    </Link>
                    <Link style={orange} to="social" className="col-3 square">
                        <h4 className="text-white text-center">Follow Us!</h4>
                    </Link>
                    <Link style={green} to="/contact-us" className="col-3 square">
                        <h4 className="text-white text-center">Any Questions?</h4>
                    </Link>
                </div>

            </div>

        </div>
    )
}