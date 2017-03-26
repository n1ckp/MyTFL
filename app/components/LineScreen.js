import React from 'react'
import { Text, ScrollView, View } from 'react-native'

import styles from '../styles/LineScreen'

export default class LineScreen extends React.Component {
  renderReasons() {
    if (this.props.lineStatus.lineStatuses[0].statusSeverityDescription === 'Good Service') { return null }
    let reasons =  this.props.lineStatus.lineStatuses.map((lineStatus, index) => {
      return <View key={`lineStatus-${index}`}>
        <Text style={styles.disruptionsContent}>{lineStatus.reason}</Text>
        <Text style={styles.disruptionsContent}>{lineStatus.disruption.additionalInfo}</Text>
      </View>
    })
    return (
      <View style={styles.disruptionsContainer}>
        <Text style={styles.disruptionsTitle}>Reasons:</Text>
        {reasons}
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.lineName}>{this.props.lineStatus.name}</Text>
        <Text style={styles.status}>{this.props.lineStatus.lineStatuses[0].statusSeverityDescription}</Text>
        {this.renderReasons()}
      </ScrollView>
    );
  }
}
