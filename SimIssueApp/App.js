/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  requestUserPermission,
  NotificationListner,
} from './src/notification/push_notification_helper';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import SplashScreen from './src/screens/SplashScreen';
import {ScreenContainer} from './src/screens/ScreenContainer';
import i18n from './src/i18n/';
import {ToastProvider} from 'react-native-toast-notifications';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType,AndroidImportance } from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationListner();

    return notifee.onForegroundEvent(async({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          try {
            await AsyncStorage.removeItem('notifiCount')
          console.log('User dismissed notification', detail.notification);
          } catch (err) {
            console.log(err);
          }
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
    
  }, []);

  return (
    <ToastProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"  screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ScreenContainer" component={ScreenContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>

  );
};

export default App;
