import { Component } from "react";


class WeatherButton extends Component{

  fetchData = async () => {
    const api = {key: '16099d6979f4197bc4f51cd19310fbc0', base: 'https://api.openweathermap.org/data/2.5/'}
    try{
      const response = await fetch(`${api.base}weather?q=London&units=metric&APPID=${api.key}`)
      if (!response.ok){throw new Error('Could not fetch resource!')}
      const data = await response.json()
      console.log(data)
    }
    catch (error){
      console.log(error)
    }
  }
  
  render(){
    return <button className='button-element' onClick={this.fetchData}>Weather</button>
  }

}

export default WeatherButton








