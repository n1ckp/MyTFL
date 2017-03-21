import React from 'react'
import { View, Text } from 'react-native'

import styles from '../../../app/styles/LineService'

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
      'issuesReported', 'noIssues', 'information'
    ]
    return [styles.status, styles[serviceCodes[severityLevel]]]
  }

  render() {
    const data = this.props.data
    return (
      <View style={styles.container}>
        <Text style={this.getLineStyle()}>{data.name}</Text>
        <Text style={this.getStatusStyle()}>{data.lineStatuses[0].statusSeverityDescription}</Text>
      </View>
    )
  }
}

export default LineService
