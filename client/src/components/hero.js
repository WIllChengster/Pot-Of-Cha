import React, {Component} from 'react';
import '../assets/css/hero.css'


class Hero extends Component{
    constructor(props){
        super(props);
        this.state = {
            navbarHeight: null,

            
        }
    }
    handleLoad(){

        const navbarHeight = document.getElementsByClassName("navbar")[0].clientHeight;
        this.setState({
            navbarHeight
        });
    }
    componentWillUpdate(){
        
        const navbarHeight = document.getElementsByClassName("navbar")[0].clientHeight;
        console.log(this.state.navbarHeight)
        if(this.state.navbarHeight != navbarHeight){
            this.setState({
                navbarHeight
            });
        }

    }

    render(){
        return(
            <div className="hero">
                <div className="innerHero"></div>
            </div>
        )
    }
}

export default Hero;