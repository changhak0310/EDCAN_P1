import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from "prop-types";
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import TodoList from './TodoComponent';

const weatherOptions = {
  Thunderstorm: {
    iconname: "weather-thunderstorm"
  },
  Drizzle: {
    iconname: "weather-hail"
  },
  Rain: {
    iconname: "weather-rainy"
  },
  Snow: {
    iconname: "weather-snowy"
  },
  Atmosphere: {
    iconname: "weather-hail"
  },
  Clear: {
    iconname: "weather-sunny"
  },
  Clouds: {
    iconname: "weather-cloudy"
  },
  Haze: {
    iconname: "weather-hail"
  },
  Mist: {
    iconname: "weather-hail"
  },
  Dust: {
    iconname: "weather-hail "
  },
}

export default function Weather({ temp, condition }: any) {
  return (
    <ViewWappar>
      <HeaderWappar/>
      <WeatherWappar>
          <MaterialCommunityIcons 
            size={90}
            name={weatherOptions[condition].iconname}
            color="black"
            style={styles.Icon}/>
          <WeatherTextWappar>현재 온도는 {temp}도 입니다</WeatherTextWappar>
      </WeatherWappar>
      <TodoWappar>
        <TodoList/>
      </TodoWappar>
    </ViewWappar>
  );
}


Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(
    ["Thunderstorm",
     "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "Dust"]).isRequired
};

const ViewWappar = styled.View`
  flex: 1;
  background-color: #00008B;
`

const HeaderWappar = styled.View`
  background-color: #4402c0cf;
  padding: 30px;
`

const WeatherWappar = styled.View`
  flex: 1;
  background-color: #c3dae075;
  justify-content: center;
  border-radius: 15px;
  margin: 10px 10px 0px 10px;
  flex-direction: row;
`

const WeatherTextWappar = styled.Text`
  flex: 3;
  margin: auto 5px auto 0px;
  font-size: 25px;
  text-align: center;
  color: #fff;
`

const TodoWappar = styled.View`
  flex: 4;
  margin: 10px 10px 0px 10px;
`

const styles = StyleSheet.create({
  Icon: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 5,
    padding: 10,
    color: 'white',
  },
})