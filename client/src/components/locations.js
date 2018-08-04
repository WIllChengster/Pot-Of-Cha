import React, { Component } from "react";
import axios from 'axios';
class Location extends Component{
    constructor(props){
        super(props)
        this.state  = {
            locations: [
                {
                    location: {
                        city:""
                    }
                }
            ]
        }
    }

    componentWillMount(){
        this.yelpAPICall();
    }
    yelpAPICall(){
        axios.get("/api/yelp/sharetea").then( res => {
            console.log(res.data.data);
            this.setState({
                locations: [
                    res.data.data
                ]
            })
        })
    }

    render(){
        const cardWidth = {width: "18rem"}
        const locations = this.state.locations.map((item, i) => {
            return(
                <div key={i} className="card" style={cardWidth}>
                    <img src={item.image_url} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{item.location.city}</h5>
                        <h6 className="card-subtitle mb2 text-muted">{item.display_phone}</h6>
                    </div>

                    <a className="card-link m-2" href={item.url} target="_blank" >Yelp</a>
                    
                </div>
            )

        })
        return(
            <div className="container">
                <h1>location</h1>
                {locations}
            </div>
        )
    }
}

export default Location;