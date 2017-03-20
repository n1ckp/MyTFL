import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  line: {
    fontSize: 20,
    flex: 1,
    padding: 8,
    paddingLeft: 24,
    borderLeftWidth: 16,
  },
  status: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    backgroundColor: 'green',
    padding: 8,
    textAlign: 'center',
    borderLeftColor: 'gray',
    borderLeftWidth: 1,
  },
  goodService: {
    backgroundColor: 'green',
  },
  partClosure: {
    backgroundColor: 'yellow',
  },
  bakerloo: {
    borderLeftColor: '#B36305',
  },
  central: {
    borderLeftColor: '#E32017',
  },
  circle: {
    borderLeftColor: '#FFD300',
  },
  district: {
    borderLeftColor: '#00782A',
  },
  'hammersmith-city': {
    borderLeftColor: '#F3A9BB',
  },
  jubilee: {
    borderLeftColor: '#A0A5A9',
  },
  metropolitan: {
    borderLeftColor: '#9B0056',
  },
  northern: {
    borderLeftColor: '#000000',
  },
  piccadilly: {
    borderLeftColor: '#003688',
  },
  'tfl-rail': {
    borderLeftColor: '#0019a8',
  },
  victoria: {
    borderLeftColor: '#0098D4',
  },
  'waterloo-city': {
    borderLeftColor: '#95CDBA',
  },
})
export default styles
