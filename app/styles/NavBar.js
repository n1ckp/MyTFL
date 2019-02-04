import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DC241F',
    flexDirection: 'row',
    height: 64,
  },
  back: {
    flex: 1,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
})
export default styles
