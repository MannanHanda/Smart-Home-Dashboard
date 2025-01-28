

const WeatherData = ({data}) => {
    console.log(data)
    return(
        <div>
            <p>Location: {data.name}</p>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Weather Description: {data.weather[0].description}</p>
        </div>
    )
}

export default WeatherData


