// Imports
import './index.css'
import WeatherButton from '../WeatherButton'
import LedButton from '../LedButton'
import TemperatureButton from '../TemperatureButton'
import HumidityButton from '../HumidityButton'
import { Component } from 'react'
import WeatherData from '../WeatherData'

// Button configuration data
const buttonData = [
    { id: 'weather', label: 'WEATHER', component: WeatherButton },
    { id: 'temperature', label: 'TEMPERATURE', component: TemperatureButton },
    { id: 'humidity', label: 'HUMIDITY', component: HumidityButton },
    { id: 'led', label: 'LED', component: LedButton },
];


class ButtonsContainer extends Component{

    state = {displayWeather: false, displayHumidity: false, displayTemperature: false, weatherData: null}
    columnClass = 'col-sm-3 col-6 flexbox-center-row';


    updateState = (index) => {
        if (index == 'weather'){
            this.setState((prevState) => ({ displayWeather: !prevState.displayWeather }),
                () => {
                    if (this.state.displayWeather) {
                        this.fetchWeatherData();
                    }
                }
            );
        }else if (index == 'humidity'){
            this.setState((prevState) => ({displayHumidity: !prevState.displayHumidity}))
        }else if (index == 'temperature'){
            this.setState((prevState) => ({displayTemperature: !prevState.displayTemperature}))
        }
    }
    renderButtons = (buttonData)=> {
        return(
        buttonData.map( (item, index) => {
            const Component = item.component;
            return(<div className={this.columnClass} key={item.id}><Component onClick={() => this.updateState(item.id)}/></div>)
        } )
        )
    }

    // Functions for Weather
    fetchWeatherData = async () => {
        const api = {key: '16099d6979f4197bc4f51cd19310fbc0', base: 'https://api.openweathermap.org/data/2.5/'}
        try{
          const response = await fetch(`${api.base}weather?q=London&units=metric&APPID=${api.key}`)
          if (!response.ok){throw new Error('Could not fetch resource!')}
          const data = await response.json()
          this.setState({weatherData: data})
        }
        catch (error){
          console.log(error)
        }
    }
    displayWeatherData = () => {
        const {displayWeather, weatherData} = this.state
        if (displayWeather && weatherData){
            return <WeatherData data={weatherData}/>
        }
    }


    render(){
        const {displayWeather, displayHumidity, displayTemperature} = this.state
        return(
            
            <div className='container-fluid buttons-container flexbox-center-column padding-y'>

                <div className='row buttons-row-1'>{this.renderButtons(buttonData)}</div>
                <div className='row buttons-row-2'>{this.displayWeatherData()}</div>

            </div>
        )
    }
}
export default ButtonsContainer
