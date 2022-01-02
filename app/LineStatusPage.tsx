import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import LineStatusRow from './LineStatusRow'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  debug: {
    fontSize: 10
  }
})

const LineStatusPage = ({ navigation }) => {
  const [tflData, setTflData] = useState<any>([])
  useEffect(() => {
    fetch('https://api.tfl.gov.uk/line/mode/tube,tflrail,dlr/status')
      .then(response => response.json())
      .then(data => {
        setTflData(data)
      })
  }, [])

  const onPressLine = (lineDetails: any) => {
    navigation.navigate('LineDetails', lineDetails)
  }

  return (
    <View style={styles.container}>
      {/* <FlatList data={tflData} renderItem={({ item }) => (
        <Text style={styles.debug}>{JSON.stringify(item, null, 2)}</Text>
      )} /> */}
      <FlatList data={tflData} renderItem={({ item, index }) => (
        <LineStatusRow key={index} {...item} onPressLine={onPressLine} />
      )} />
    </View>
  )
}

export default LineStatusPage
