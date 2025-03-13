import { Component } from 'react'
import './index.css'

class WeatherData extends Component{    

    formatDate = () =>{
        const today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1
        let date = today.getDate()
        if (month < 10){month = '0' + month }
        if (date < 10){date = '0' + date }
        const formattedDate = date + '/' + month + '/' + year;
        return formattedDate
    }

    render(){
       
        const {data} = this.props;
        console.log(data)

        if (!data) {
            return <h1>Loading...</h1>; 
        }

        if (!data.name) {
            return <h1>Error: Data is missing</h1>;
        }
        console.log(data.name)
        
        return(
            <div class='weather-data'>
                <p id='date'>{this.formatDate()}</p>
                <p id="city">{data.name}</p>
                <p id="temperature">Temperature: {data.main.temp}°C</p>
                <p id="humidity">Humidity: {data.main.humidity}%</p>
                <p id="description">Description: {data.weather[0].description}</p>
            </div>
        )
    }    

    

}


export default WeatherData


/* <div className="weather-data">
            
            <div ><p id='city'>{data.name}</p></div>

            <div ><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>{data.sys.country}</p>
            </div>

                
            <p>{formattedDate}</p>

        </div> */