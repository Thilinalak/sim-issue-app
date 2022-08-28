import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import {HomeScreen} from './HomeScreen'
import {NotificationScreen} from './NotificationScreen'
import {UserScreen} from './UserScreen'

const Tab = createBottomTabNavigator()

export const ScreenContainer = () => {
  return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route})=>({
                tabBarIcon:({focused, color, size})=>{
                    let iconName;
                    
                    if(route.name === 'Home'){
                        iconName = focused ? 'home' : 'home-outline'
                    }else if (route.name === 'Notification'){
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    }else if (route.name === 'User'){
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor :'gray',
                headerShown:false,
            })}
            >
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen options={{ tabBarBadge: 3 }} name='Notification' component={NotificationScreen}/>
                <Tab.Screen name='User' component={UserScreen}/>

        </Tab.Navigator>

  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eff556' ,
        flex:1,
        padding:20
    },
    textStyle: {
        color:'black',
        fontSize:33,
        fontWeight: "bold"
    },
    contentCenter:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    
})