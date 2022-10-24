/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee, { AndroidImportance } from '@notifee/react-native';


// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  notifficationCount(remoteMessage)
    console.log('Message handled in the background!', remoteMessage);
  });

  messaging().onMessage(async remoteMessage => {
    notifficationCount(remoteMessage)
    onDisplayNotification(remoteMessage)
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  const notifficationCount = async(remoteMessage)=>{
    if(remoteMessage){
      try {
        let notifiCount = await AsyncStorage.getItem('notifiCount')
        if(notifiCount != null){
          notifiCount++
          await AsyncStorage.setItem('notifiCount', notifiCount.toString())
        }else{
          await AsyncStorage.setItem('notifiCount', "1")
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  const onDisplayNotification = async(remoteMessage)=> {
    
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'Default',
      name: 'NotificationScreen',
      importance : AndroidImportance.HIGH
    });

    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }


AppRegistry.registerComponent(appName, () => App);
