import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

exports.requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
};

const getFCMToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken')
  console.log('Old Token ',fcmToken);

  
    try {
      let fcmtokenn = await messaging().getToken();
      console.log('nnnew token ', fcmtokenn);

      if (fcmtokenn) {
        console.log('new Token ', fcmtokenn);
        await AsyncStorage.setItem('fcmToken', fcmtokenn);
      }
    } catch (err) {
      console.log(err);
    }
  
};

exports.NotificationListner = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('Notification on froground state..', remoteMessage);
  });
};


