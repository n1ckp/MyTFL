import { FlatList, StyleSheet, Text, View } from "react-native"
import { COLORS } from "./utils/sharedStyles"

const styles = StyleSheet.create({
  lineStatus: {
    padding: 20,
    backgroundColor: COLORS.YELLOW,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  reason: {
    fontSize: 20
  }
})

const LineDetailsPage = ({ route, navigation }) => {
  const details = route.params
  const lineStatuses = details.lineStatuses
  return (
    <View>
      {/* <Text>{JSON.stringify(details, null, 2)}</Text> */}
      {lineStatuses ? <FlatList data={details.lineStatuses} renderItem={({ item, index }) => {
        return (
          <View key={index} style={styles.lineStatus}>
            <Text style={styles.title}>{item.statusSeverityDescription}</Text>
            <Text style={styles.reason}>{item.reason}</Text>
          </View>
        )
      }} /> : null}
    </View>
  )
}

export default LineDetailsPage
