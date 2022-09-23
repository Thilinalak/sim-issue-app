/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
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

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListner();
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

    //       <>
    //         {isSignedIn ? (
    //           <><ToastProvider>
    //           <NavigationContainer>
    //             <Stack.Navigator screenOptions={{headerShown: false}}>
    //             <Stack.Screen
    //               name="ScreenContainer"
    //               component={ScreenContainer}
    //             />
    //             </Stack.Navigator>
    //   </NavigationContainer>
    // </ToastProvider>
    //           </>
    //         ) : (
    //           <>
    //           <ToastProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{headerShown: false}}>
    //             <Stack.Screen name="Login" component={Login} />
    //             <Stack.Screen name="Register" component={Register} />
    //             </Stack.Navigator>
    //   </NavigationContainer>
    // </ToastProvider>
    //           </>
    //         )}
    //       </>
  );
};

export default App;
