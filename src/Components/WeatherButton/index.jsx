import { Component } from "react";


class WeatherButton extends Component{
  
  render(){
    const {onClick} = this.props
    return <button className='button-element' onClick={onClick}>Weather</button>
  }

}


export default WeatherButton








