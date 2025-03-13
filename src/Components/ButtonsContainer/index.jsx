// Imports
import './index.css'
import WeatherButton from '../WeatherButton'
import LedButton from '../LedButton'
import TemperatureButton from '../TemperatureButton'
import HumidityButton from '../HumidityButton'
import WeatherData from '../WeatherData'
import { Component } from 'react'

// Button configuration data
const buttonsWithAttachedFunctionalities = [
    { id: 'weather', label: 'WEATHER', component: WeatherButton },
    { id: 'temperature', label: 'TEMPERATURE', component: TemperatureButton },
    { id: 'humidity', label: 'HUMIDITY', component: HumidityButton },
    { id: 'led', label: 'LED', component: LedButton },
];


// Class component
class ButtonsContainer extends Component{

    //state 
    state = {displayWeather: false, displayHumidity: false, displayTemperature: false, weatherData: null}
    //css
    columnClass = 'col-sm-3 col-6 flexbox-center-row';


    //updates the state of the button clicked and handles the state of the other buttons
    updateButtonState = (index) => {
        if (index === 'weather') {
            this.setState((prevState) => ({
                displayWeather: !prevState.displayWeather,
                displayHumidity: false,
                displayTemperature: false,
                weatherData: null
            }), () => {
                if (this.state.displayWeather) {
                    this.fetchWeatherData();
                }
            });
        } 
        else if (index=='temperature'){
            this.setState((prevState) => {
                return {displayWeather: false, displayHumidity: false, displayTemperature: !prevState.displayTemperature, weatherData: null}
            })
        }
        else if (index=='humidity'){
            this.setState((prevState) => {
                return {displayWeather: false, displayHumidity: !prevState.displayHumidity, displayTemperature: false, weatherData: null}
            })
        } 
            // if (this.state.displayWeather) {this.fetchWeatherData();} 
    }


    //renders the functionality buttons on the website
    renderButtonsWithAttachedFunctionalities = (buttons) => (
        buttons.map(({id, label, component: Component}) => (
            <div className={this.columnClass} key={id}>
                <Component title={label} onClick={() => this.updateButtonState(id)}/>
            </div>
        ))   
    )
   
    //fetches weather data from a weather api
    fetchWeatherData = async () => {
        const api = {key: import.meta.env.VITE_WEATHER_API_KEY , base: 'https://api.openweathermap.org/data/2.5/'}
        try{
          const response = await fetch(`${api.base}weather?q=Luton&units=metric&APPID=${api.key}`)
          if (!response.ok){throw new Error('Could not fetch resource!')}
          const data = await response.json()
          this.setState({weatherData: data})
        }
        catch (error){
          console.log(error)
          this.setState({ weatherData: null });
        }
    }
  


    displayData = ()=>{
        const {displayWeather, displayHumidity, displayTemperature, weatherData} = this.state
        
        if (displayWeather){
            // <WeatherData data={weatherData}/>
            return <WeatherData data={weatherData}/>
        }

        else if (displayHumidity){
            return <h1>Humidity</h1>
        }

        else if (displayTemperature){
            return <h1>Tempearure</h1>
        }

    }


    render(){

        return(
            
            <div className='container-fluid buttons-container flexbox-center-column padding-y'>

                <div className='row buttons-row-1'>
                    {this.renderButtonsWithAttachedFunctionalities(buttonsWithAttachedFunctionalities)}
                </div>

                <div className='row buttons-row-2'>
                    
                    <div className='col data-column flexbox-center-column'>{this.displayData()}</div>
                </div>

            </div>
        )
    }
}
export default ButtonsContainer






{/* // this.setState((prevState) => ({ displayWeather: !prevState.displayWeather }),
            //     () => {
            //         if (this.state.displayWeather) {
            //             this.fetchWeatherData();
            //         }
            //     }
            // );

            // onClick={() => this.updateButtonState(item.id)}  */}