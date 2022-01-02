import { StyleSheet, Text, View } from "react-native";
import { COLORS, WINDOW_DIMENSIONS } from "./utils/sharedStyles";

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: WINDOW_DIMENSIONS.width,
    backgroundColor: COLORS.TFL_RED,
  },
  title: {
    height: 90,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  }
})

const NavBar = () => (
  <View style={styles.container}><Text style={styles.title}>MyTFL</Text></View>
)

export default NavBar
