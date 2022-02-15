import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BusStopPage from '../BusStopPage';
import LineStatusPage from '../LineStatusPage';
import { PAGE_IDS } from '../utils/navigation';
import { COLORS } from '../utils/sharedStyles';

const LineStatusesTab = createBottomTabNavigator();

function LineStatusesNavStack() {
  return (
    <LineStatusesTab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => null,
      tabBarActiveTintColor: COLORS.BLACK,
      tabBarInactiveTintColor: COLORS.JUBILEE,
      tabBarStyle: {
        alignItems: "center"
      }
    })}>
      <LineStatusesTab.Screen name={PAGE_IDS.LINE_STATUSES} component={LineStatusPage} options={{ title: 'Tube lines' }} />
      <LineStatusesTab.Screen name={PAGE_IDS.BUS_STOPS} component={BusStopPage} options={{ title: 'Bus stops' }} />
    </LineStatusesTab.Navigator>
  );
}

export default LineStatusesNavStack
