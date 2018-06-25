import React, {Component} from 'react';
import '../assets/css/carousel.css'

class Carousel extends Component{
    constructor(props){
        super(props)
        this.state={
            switch: true,
            timeElapsed: 0,
        }
        this.timeUpdate = this.timeUpdate.bind(this);
    }

    componentDidMount(){
        const timer = setInterval(this.timeUpdate, 1000);
    }

    timeUpdate(){
        if(this.state.timeElapsed < 4){
            this.setState({
                timeElapsed: this.state.timeElapsed + 1,
            });
        } else{
            this.setState({
                timeElapsed: 0
            })
        }

    }




    render(){
        console.log(this.state.timeElapsed);

        const example = (
            <div className="content" >
                <h1 className="text-center">Your picture here!</h1>
            </div>
        )

        return(
            <div className="slider">
                {example}

            </div>
        )
    }
}

export default Carousel;