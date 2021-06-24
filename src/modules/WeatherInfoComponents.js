import React from "react";
import styled from "styled-components";

export const WeatherInfoIcons = {
    sunset: "/react-wether-app/icon/temp.svg",
    sunrise: "/react-wether-app/icon/temp.svg",
    humidity: "/react-wether-app/icon/humidity.svg",
    wind: "/react-wether-app/icon/wind.svg",
    pressure: "/react-wether-app/icon/pressure.svg",
};

export const WeatherIcons = {
    "01d": "/react-wether-app/icon/sunny.svg",
    "01n": "/react-wether-app/icon/night.svg",
    "02d": "/react-wether-app/icon/day.svg",
    "02n": "/react-wether-app/icon/cloudy-night.svg",
    "03d": "/react-wether-app/icon/cloudy.svg",
    "03n": "/react-wether-app/icon/cloudy.svg",
    "04d": "/react-wether-app/icon/perfect-day.svg",
    "04n": "/react-wether-app/icon/cloudy-night.svg",
    "09d": "/react-wether-app/icon/rain.svg",
    "09n": "/icon/rain-night.svg",
    "10d": "/react-wether-app/icon/rain.svg",
    "10n": "/react-wether-app/icon/rain-night.svg",
    "11d": "/react-wether-app/icon/storm.svg",
    "11n": "/react-wether-app/icon/storm.svg",
    "50n": "/react-wether-app/icon/rain.svg",
};

const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 30px auto;
`;

const Condition = styled.span`
    margin: 20px auto;
    font-size: 14px;

    & span{
        font-size: 28px;
    }
`;

const WeatherLogo = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;
`;

const Location = styled.span`
    font-size: 28px;
    font-weight: bold;

`;

const WeatherInfoLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    margin: 20px 25px 10px;
    text-align: start;
    width: 90%;
`;

const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;


const InfoContainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px;

    & span {
        font-size: 12px;
        text-transform: capitalize;
    }
`;


const WeatherInfoComponents = (props) => {
    const { name, value } = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoLabel>
                {value}
                <span>{name} </span>
            </InfoLabel>
        </InfoContainer>
    );
};

const WeatheComponents = (props) => {
    const { weather } = props;
    const isDay = weather?.weather[0].icon?.includes("d");
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} :${new Date(timeStamp * 1000).getMinutes()}`;
    };

    return (
        <>
            <WeatherCondition>
                <Condition><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{`| ${weather?.weather[0].description}`}</Condition>
                <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponents
                    name={isDay ? "sunset" : "sunrise"}
                    value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} />
                <WeatherInfoComponents name="humidity" value={weather?.main?.humidity} />
                <WeatherInfoComponents name="wind" value={weather?.wind?.speed} />
                <WeatherInfoComponents name="pressure" value={weather?.main?.pressure} />
            </WeatherInfoContainer>
        </>
    );
};

export default WeatheComponents;