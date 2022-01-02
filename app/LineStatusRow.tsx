import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { COLORS, WINDOW_DIMENSIONS } from "./utils/sharedStyles";

const STATUS_CODES = [
  'specialService', 'closed', 'noService', 'noService', 'plannedClosure', 'partClosure',
  'severeDelays', 'reducedService', 'busService', 'minorDelays', 'goodService', 'partClosed',
  'exitOnly', 'noStepFreeAccess', 'changeOfFrequency', 'diverted', 'notRunning',
  'issuesReported', 'noIssues', 'information', 'serviceClosed'
]

const statusStyles = StyleSheet.create({
  goodService: {
    backgroundColor: COLORS.GREEN,
    color: 'white',
  },
  partClosure: {
    backgroundColor: COLORS.YELLOW,
  },
  severeDelays: {
    backgroundColor: COLORS.ORANGE,
  },
  reducedService: {
    backgroundColor: COLORS.ORANGE,
  },
  noService: {
    backgroundColor: COLORS.RED,
    color: 'white',
  },
  plannedClosure: {
    backgroundColor: COLORS.RED,
    color: 'white',
  },
  closed: {
    backgroundColor: COLORS.RED,
    color: 'white',
  },
  serviceClosed: {
    backgroundColor: COLORS.RED,
    color: 'white',
  },
  minorDelays: {
    backgroundColor: COLORS.YELLOW,
  },
})

const HEIGHT = 50

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: HEIGHT,
    width: WINDOW_DIMENSIONS.width,
    borderLeftWidth: 20,
    paddingLeft: 20,
    flexDirection: "row",
    backgroundColor: COLORS.WHITE
  },
  name: {
    color: COLORS.BLACK,
    fontSize: 20,
    flex: 1
  },
  status: {
    fontSize: 16,
    height: HEIGHT,
    paddingLeft: 12,
    paddingRight: 12,
    width: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})

const LineStatusRow = (props: any) => {
  const lineColourId = props.id.toUpperCase().replace('-', '_')
  const statusCode = props.lineStatuses ? STATUS_CODES[props.lineStatuses[0].statusSeverity] : 'loading'
  const statusCodeText = props.lineStatuses ? props.lineStatuses[0].statusSeverityDescription : ''

  return (
    <TouchableHighlight onPress={() => props.onPressLine(props)}>
      <View style={[styles.container, { borderColor: COLORS[lineColourId] }]}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={[styles.status, statusStyles[statusCode]]}>{statusCodeText}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default LineStatusRow
