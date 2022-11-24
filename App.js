import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';


import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import HomeScreen from './src/Page';


export default function App() {
  const Page = createNativeStackNavigator();
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo?.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
      <NavigationContainer >
        <Page.Navigator screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
        }}>
          <Page.Screen
            name='Phúc Khang Gems'
            component={HomeScreen} />
        </Page.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  }
});