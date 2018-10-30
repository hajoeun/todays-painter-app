import React from 'react';
import { View } from 'react-native';
import Body from './component/Body'
import Login from './component/Login';
import style from './style/App.style'

class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Body content={<Login/>}/>
      </View>
    );
  }
}

export default App;