import React from 'react'
import { ScrollView, Text, Button } from 'react-native'

import LineService from './LineService'

import styles from '../styles/MyTFL'

export default class MyTFL extends React.Component {
  componentWillMount() {
    this.props.onLoad()
  }

  renderTubeStatuses() {
    const {navigate} = this.props.navigation
    if (this.props.loading || !this.props.lineStatuses) {return <Text style={styles.loading}>Loading...</Text>}
    return this.props.lineStatuses.map((data, index) => {
      return (
        <LineService key={`data-${index}`} data={data} onTouch={() => navigate('Line', {lineIndex: index})} />
      )
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderTubeStatuses()}
      </ScrollView>
    );
  }
}
