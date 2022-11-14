import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Page';

export default function App() {
  const Page = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Page.Navigator screenOptions={{
        headerTitleAlign: "center",
      }}>
        <Page.Screen
          name='Phúc Khang Gems'
          component={HomeScreen} />
      </Page.Navigator>
    </NavigationContainer>
  );
}
