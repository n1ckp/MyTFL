import React from 'react'
import { Text, ScrollView, Button } from 'react-native'

import styles from '../styles/LineScreen'

export default class LineScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title="< Back" onPress={() => this.props.navigator.pop()} />
        <Text style={styles.lineName}>{this.props.lineStatus.name}</Text>
        <Text style={styles.status}>{this.props.lineStatus.lineStatuses[0].statusSeverityDescription}</Text>
        <Text>{JSON.stringify(this.props.lineStatus)}</Text>
      </ScrollView>
    );
  }
}
