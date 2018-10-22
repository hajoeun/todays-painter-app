import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your</Text>
        <Text style={styles.title}>Today's Painter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#ccc',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 60
  }
});
