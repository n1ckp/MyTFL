import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { PAGE_IDS } from './app/utils/navigation';
import LineStatusesNavStack from './app/lineStatuses/LineStatusesNavStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LineDetailsPage from './app/LineDetailsPage';

const AppStack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={PAGE_IDS.LINE_STATUSES}>
        <AppStack.Screen name={PAGE_IDS.LINE_STATUSES} component={LineStatusesNavStack} options={{ headerShown: false }} />
        <AppStack.Screen name={PAGE_IDS.LINE_DETAILS} component={LineDetailsPage} options={({ route }) => ({ title: route.params.name })} />
      </AppStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
