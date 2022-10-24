import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios' 
import {IP_ADDRESS} from '@env'
import messaging from '@react-native-firebase/messaging'

const SplashScreen = () => {
  const [isGo, setIsGo] = useState(true);
  const navigate = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(async () => {
        const userData = JSON.parse(await AsyncStorage.getItem('userData'));
        if (userData) {
          await axios.post(`http://${IP_ADDRESS}:5000/api/fcm-notifications/save-fcmtoken`,
          { dataInfo:{  userid :userData.user.id,
            fcmToken :await messaging().getToken()} }
          )
          .then((resp) =>{
            if(resp.status == 200) {
              navigate.navigate('ScreenContainer');
              setIsGo(false);
            }
          })
          .catch(e=>console.log(e))
          
        } else {
          navigate.navigate('Login');
          setIsGo(false);
        }
      }, 500);
    }
  }, []);

  return (
    <View style={style.container}>
      <Image style={{width:100, height:100}}
        source={require('../assets/images/logo.png')}
      />
      <Text style={{color:'#7812a3'}}>Sim Issue App</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
