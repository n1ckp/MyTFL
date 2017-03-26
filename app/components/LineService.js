import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

import styles from '../styles/LineService'

class LineService extends React.Component {
  getLineStyle() {
    return [styles.line, styles[this.props.data.id]]
  }

  getStatusStyle() {
    const severityLevel = this.props.data.lineStatuses[0].statusSeverity
    const serviceCodes = [
      'specialService', 'closed', 'noService', 'noService', 'plannedClosure', 'partClosure',
      'severeDelays', 'reducedService', 'busService', 'minorDelays', 'goodService', 'partClosed',
      'exitOnly', 'noStepFreeAccess', 'changeOfFrequency', 'diverted', 'notRunning',
      'issuesReported', 'noIssues', 'information', 'serviceClosed'
    ]
    return [styles.status, styles[serviceCodes[severityLevel]]]
  }

  render() {
    const data = this.props.data
    return (
      <TouchableHighlight onPress={() => {this.props.onTouch()}}>
        <View style={styles.container}>
          <Text style={this.getLineStyle()}>{data.name}</Text>
          <Text style={this.getStatusStyle()}>{data.lineStatuses[0].statusSeverityDescription}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default LineService
