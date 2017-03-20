import React from 'react'
import { View, Text } from 'react-native'

import styles from '../../../app/styles/LineService'

class LineService extends React.Component {
  getLineStyle() {
    return [styles.line, styles[this.props.data.id]]
  }

  getStatusStyle() {
    const severityLevel = this.props.data.lineStatuses[0].statusSeverity
    let statusStyle = styles.goodService
    if (severityLevel === 5) {
      statusStyle = styles.partClosure
    }
    return [styles.status, statusStyle]
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
