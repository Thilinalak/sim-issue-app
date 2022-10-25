import React, { useState} from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

// Screens
import {HomeScreen} from './HomeScreen';
import {AddIssueScreen} from './AddIssueScreen';

import {NotificationScreen} from './NotificationScreen';
import {UserScreen} from './UserScreen';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export const NestedScreens = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="AddIssueScreen" component={AddIssueScreen} />
    </HomeStack.Navigator>
  );
};

export const ScreenContainer = () => {

  useFocusEffect(
    React.useCallback(() => {
      const checkNotificationsCount = async () => {
        try {
          let notifiCount = await AsyncStorage.getItem('notifiCount');
          if(notifiCount != null){
            setNotificationCount(notifiCount);
          }else{
            setNotificationCount(null)
          }
          
        } catch (e) {
          console.log(e);
        }
      };
      const intervalId = setInterval(() => {
        checkNotificationsCount();
      }, 1000 * 5); 
      return () => clearInterval(intervalId);
    }, [setNotificationCount]),
  );

  let [notificationCount, setNotificationCount] = useState(null);
  const {t, i18n} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={t('home')}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === t('home')) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === t('notification')) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === t('user2')) {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle:{
          height:66,
          paddingTop:10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom:10
        },
        
      })}>
      <Tab.Screen name={t('home')} component={NestedScreens} />
      <Tab.Screen
        options={{tabBarBadge: notificationCount == null ? null :notificationCount}}
        name={t('notification')}
        component={NotificationScreen}
      />
      <Tab.Screen name={t('user2')} component={UserScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eff556',
    flex: 1,
    padding: 20,
  },
  textStyle: {
    color: 'black',
    fontSize: 33,
    fontWeight: 'bold',
  },
  contentCenter: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
