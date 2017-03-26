import React from 'react'
import { Navigator, View, Text, TouchableHighlight } from 'react-native'

import MyTFLContainer from './containers/MyTFLContainer'
import LineContainer from './containers/LineContainer'

import styles from './styles/NavBar'

class MainNavigator extends React.Component {
  renderScreen( route, navigator ) {
    if (route.id === 'MainScreen') {
      return (
        <MyTFLContainer
          navigator={navigator}
          route={route}/>
      )
    }
    if (route.id === 'LineScreen') {
      return (
        <LineContainer
          navigator={navigator}
          route={route}/>
      )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'MainScreen', name: 'Index'}}
        renderScene={this.renderScreen.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (route.id === 'MainScreen') {
                  return null
                }
                else if (route.id === 'LineScreen') {
                  return (
                    <TouchableHighlight style={styles.back} onPress={() => navigator.pop()}>
                      <Text style={styles.text}>{"< Back"}</Text>
                    </TouchableHighlight>
                  )
                }
              },
              RightButton: (route, navigator, index, navState) => {
                return null
              },
              Title: (route, navigator, index, navState) => {
                let titleText
                if (route.id === 'MainScreen') {
                  titleText = "Tube Line Statuses"
                }
                else if (route.id === 'LineScreen') {
                  titleText = "Line Status"
                }
                return (
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{titleText}</Text>
                  </View>
                )
              },
            }}
            style={styles.container}
          />
        }
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.PushFromRight;
        }}
      />
    )
  }
}

export default MainNavigator
