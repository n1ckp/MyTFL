import React from 'react'
import { Text, ScrollView } from 'react-native'

import styles from '../styles/LineScreen'

export default class LineScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.lineName}>{this.props.lineStatus.name}</Text>
        <Text style={styles.status}>{this.props.lineStatus.lineStatuses[0].statusSeverityDescription}</Text>
        <Text>{JSON.stringify(this.props.lineStatus)}</Text>
      </ScrollView>
    );
  }
}
