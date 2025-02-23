import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Places from './screens/Places';
import AddPlace from './screens/AddPlace';
import PlaceDetails from './screens/PlaceDetails';
import MapScreen from './screens/MapScreen';
import { headerStyles } from './styles/baseStyles';
import { initializeDatabase } from './utils/database';
import { useEffect, useState, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Initialize database
  useEffect(() => {
    async function prepare() {
      try {
        await initializeDatabase();
      } catch (error) {
        console.error('Error initializing database:', error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={headerStyles}>
            <Stack.Screen name="Places" component={Places} />
            <Stack.Screen
              name="Add Place"
              component={AddPlace}
              options={{
                title: 'Add a New Place',
                headerBackButtonDisplayMode: 'minimal',
              }}
            />
            <Stack.Screen
              name="PlaceDetails"
              component={PlaceDetails}
              options={{ title: 'Place Name Placeholder' }}
            />
            <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Map' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
