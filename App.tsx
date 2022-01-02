import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LineDetailsPage from './app/LineDetailsPage';
import LineStatusPage from './app/LineStatusPage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LineStatuses">
        <Stack.Screen name="LineStatuses" component={LineStatusPage} options={{ title: 'Tube lines' }} />
        <Stack.Screen name="LineDetails" component={LineDetailsPage} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
