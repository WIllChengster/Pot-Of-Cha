import React from 'react';
import '../assets/css/home.css'

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
                    <div className="col-3 bg-dark square">
                        <h3 className="text-white text-center" >Check out our locations</h3>
                    </div>
                    <div className="col-3 bg-primary square"></div>
                    <div className="col-3 bg-info square"></div>
                    <div className="col-3 bg-danger square"></div>

                </div>
            </div>

        </div>
    )
}