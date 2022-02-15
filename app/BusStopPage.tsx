import { useEffect, useState } from "react"
import { Button, FlatList, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24
  },
  debug: {
    fontSize: 10
  },
  arrivalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  lineName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
    width: 100
  },
  eta: {
    fontSize: 14
  }
})

const BusStopPage = () => {
  // Marshgate Lane
  // https://api.tfl.gov.uk/StopPoint/490009695MA

  const [busStopData, setBusStopData] = useState<any>({})
  const [arrivalsData, setArrivalsData] = useState<any>([])

  useEffect(() => {
    fetch('https://api.tfl.gov.uk/StopPoint/490009695MA')
      .then(response => response.json())
      .then(data => {
        setBusStopData(data)
      })
    fetch('https://api.tfl.gov.uk/StopPoint/490009695MA/Arrivals')
      .then(response => response.json())
      .then(data => {
        setArrivalsData(data)
      })
  }, [])

  if (!busStopData || !Object.keys(busStopData).length) {
    return <Text>Loading...</Text>
  }

  arrivalsData.sort((a: any, b: any) =>
    a.timeToStation > b.timeToStation
  )

  const towardsProperty = busStopData.children[0].additionalProperties.find(p => p.key === "Towards")
  const towardsDescription = towardsProperty ? `Towards ${towardsProperty.value}` : ''
  return (
    <View style={styles.container}>
      <Button title="Refresh" onPress={() => {
        setArrivalsData([])
        fetch('https://api.tfl.gov.uk/StopPoint/490009695MA/Arrivals')
          .then(response => response.json())
          .then(data => {
            setArrivalsData(data)
          })
      }} />
      <Text style={styles.title}>{busStopData.commonName}</Text>
      <Text>{towardsDescription}</Text>
      {arrivalsData.length ? <FlatList data={arrivalsData} renderItem={({ item, index }) => {
        const timeToArrivalMinutes = Math.round(item.timeToStation / 60)
        return (
          <View key={index} style={styles.arrivalRow}>
            <Text style={styles.lineName}>{item.lineName}</Text>
            <Text style={styles.eta}>{`${timeToArrivalMinutes} mins`}</Text>
          </View>
        )
      }} /> : <Text>Loading...</Text>}

      {/* <FlatList data={[busStopData]} renderItem={({ item }) => (
        <Text style={styles.debug}>{JSON.stringify(item, null, 2)}</Text>
      )} /> */}

      {/* <FlatList data={arrivalsData} renderItem={({ item }) => (
        <Text style={styles.debug}>{JSON.stringify(item, null, 2)}</Text>
      )} /> */}

    </View>
  )
}

export default BusStopPage
