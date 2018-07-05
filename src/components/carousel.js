import React, {Component} from 'react';
import '../assets/css/carousel.css'

class Carousel extends Component{
    constructor(props){
        super(props)
        this.state={
            switch: true,
            timeElapsed: 0,
            slide1: {
                image: null,
                style: {
                    transform: "translateX(0%)",
                    transition: null,
                },

            },
            slide2:{
                image: null,
                style: {
                    transform: "translateX(100%)",
                    transition: "1.5s",
                },
            },
        };

        this.timeUpdate = this.timeUpdate.bind(this);
    }

    componentDidMount(){
        const timer = setInterval(this.timeUpdate, 1000);
    }

    timeUpdate(){
        if(this.state.timeElapsed < 6){
            this.setState({
                timeElapsed: this.state.timeElapsed + 1,
            });
        } else{
            this.switchContent()
            this.setState({
                timeElapsed: 0,
            });
        };
    }

    switchContent(){
        if(this.state.switch){
            this.setState({
                slide1: {
                    ...this.state.slide1,
                    style: {
                        transform: "translateX(100%)",
                        transition: "1.5s",
                        transitionDelay: "1.5s"
                    }
                },
                slide2: {
                    ...this.state.slide2,
                    style: {
                        transform: "translateX(0%)",
                        transition: "1.5s",
                        zIndex: 1,
                    }
                },
                switch: false,
            });

        } else{
            this.setState({
                slide1: {
                    ...this.state.slide1,
                    style: {
                        transform: "translateX(0%)",
                        transition: "1.5s",
                        zIndex: 1,
                    }
                },
                slide2: {
                    ...this.state.slide2,
                    style: {
                        transform: "translateX(100%)",
                        transition: "1.5s",
                        transitionDelay: "1.5s"
                    }
                },
                switch: true,
            });
        }
    }

    render(){
        const example = (
            <div className="content" >
                <h1 className="text-center">Your picture here!</h1>
            </div>
        )

        return(
            <div className="slider">
                <div style={this.state.slide1.style} className="content" >
                    <h1 className="text-center">Your picture here!</h1>
                </div>
                <div style={this.state.slide2.style} className="content2" >
                    <h1 className="text-center">Your picture here!</h1>
                </div>

            </div>
        )
    }
}

export default Carousel;