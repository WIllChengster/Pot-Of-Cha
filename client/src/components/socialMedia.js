import React, { Component } from "react";
import axios from 'axios';
import "../assets/css/social.css"
class SocialMedia extends Component{
    constructor(props){
        super(props)
    }

    axiosInstagram(){
        axios.get("https://api.instagram.com/v1/tags/badminton/media/recent?access_token=243127184.3ef09ec.f6288de486a048a2a5a2b22812318591").then(res=>{
            console.log(res);
        })
    }

    render(){
        this.axiosInstagram();
        return(
            <div className="SocialMedia">
                <h1>Social Media</h1>
                <div className="instagram">
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                </div>


            </div>
        )
    }
}

export default SocialMedia  ;