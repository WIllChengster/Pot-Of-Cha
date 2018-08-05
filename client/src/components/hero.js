import React, {Component} from 'react';
import '../assets/css/hero.css'


class Hero extends Component{
    constructor(props){
        super(props);
        this.state = {
            navbarHeight: null,

            
        }
    }
    componentDidMount(){
        const navbarHeight = document.getElementsByClassName("navbar")[0].clientHeight;
        if(this.state.navbarHeight != navbarHeight){
            this.setState({
                navbarHeight
            });
        }
        
    }

    render(){
        console.log(this.state.navbarHeight);
        const fullScreen = {height: `calc(100vh - ${this.state.navbarHeight}px)`}
        console.log(fullScreen);
        return(
            <div style={fullScreen} className="hero">
                <div className="innerHero"></div>
            </div>
        )
    }
}

export default Hero;