import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux'
import store from './app/redux/store'


import MyTFLContainer from './app/containers/MyTFLContainer'
import LineContainer from './app/containers/LineContainer'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'TFL Statuses',
  }

  render() {
    return <MyTFLContainer navigation={this.props.navigation} />
  }
}

class LineScreen extends React.Component {
  static navigationOptions = {
    title: 'Line Screen',
  }

  render() {
    return <LineContainer navigation={this.props.navigation} />
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Line: {screen: LineScreen},
});
const AppNavigator = createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App;
