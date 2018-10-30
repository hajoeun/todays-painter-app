import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';
import style from '../style/App.style';
const bg_img = require('../assets/main_bg.jpg');

class Login extends Component {
  render () {
    return (
      <ImageBackground style={style.body} source={bg_img}>
        <Text style={style.title}>Your</Text>
        <Text style={style.title}>Today's Painter</Text>
      </ImageBackground>
    )
  }
}

export default Login;