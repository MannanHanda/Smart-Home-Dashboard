// Imports
import './index.css'
import WeatherButton from '../weatherButton'
import LedButton from '../LedButton'
import TemperatureButton from '../TemperatureButton'
import HumidityButton from '../HumidityButton'

// Button configuration data
const buttonData = [
    { label: 'Weather', component: WeatherButton },
    { label: 'Temperature', component: TemperatureButton },
    { label: 'Humidity', component: HumidityButton },
    { label: 'LED', component: LedButton },
]

const ButtonsContainer = () =>{

    const columnClass = 'col-sm-6 flexbox-center-row';
    
    const renderButtons = (buttonData)=> {
        return(
        buttonData.map( (item, index) => {
            const Component = item.component;
            return(<div className={columnClass} key={index}><Component/></div>)
        } )
        )
    }

    return(
        <div className='container-fluid buttons-container flexbox-center-column padding-y'>
            <div className='row buttons-row'>{renderButtons(buttonData)}</div>
        </div>
    )
}

export default ButtonsContainer
