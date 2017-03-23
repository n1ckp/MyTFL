import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Navigator } from 'react-native'

import * as reducers from './reducers'

import MyTFLContainer from './containers/MyTFLContainer'
import LineContainer from './containers/LineContainer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends React.Component {
  renderScreen( route, navigator ) {
    const routeId = route.id;
    if (routeId === 'MainScreen') {
      return (
        <MyTFLContainer
          navigator={navigator}
          route={route}/>
      )
    }
    if (routeId === 'LineScreen') {
      return (
        <LineContainer
          navigator={navigator}
          route={route}/>
      )
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{id: 'MainScreen', name: 'Index'}}
          renderScene={this.renderScreen.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.PushFromRight;
          }}/>
      </Provider>
    )
  }
}
export default App
