import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import BingMapsReact from 'bingmaps-react';
import env from 'react-dotenv';

const Weather = props => {
    const [userLoc, setUserLoc] = useState();
    const [weather, setWeather] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            axios(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${env.OPEN_WEATHER}&units=imperial`)
                .then(res => {
                    console.log(res);
                    setWeather(() => res);
                })
                .catch(err => console.log(err))
            setUserLoc(() => position);
        })
    },[])

    return (
        <Row>
            <span className="h2">Weather!</span>
            <ul className='list-unstyled'>
                {weather 
                &&<>
                    <li>Location: {weather.data.name}</li>
                    <li>Latitude: {userLoc.coords.latitude}</li>
                    <li>Longitude: {userLoc.coords.longitude}</li>
                </>}
            </ul>
            {weather && <p>High: {weather.data.main.temp_max}&deg; Low: {weather.data.main.temp_min}&deg; Feels Like: {weather.data.main.feels_like}&deg;</p>}
            {weather && <BingMapsReact 
                bingMapsKey={env.BING} 
                height="500px"
                pushPins={[{
                    center: {
                        latitude: userLoc.coords.latitude,
                        longitude: userLoc.coords.longitude
                    },
                        options: {
                        title: weather.data.name,
                    }
                }]}
                viewOptions={{
                    center: {
                        latitude: userLoc.coords.latitude,
                        longitude: userLoc.coords.longitude
                    },
                    mapTypeId: 'aerial'
                }}
            />}
        </Row>
    )
}

export default Weather;