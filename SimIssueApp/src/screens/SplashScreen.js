import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const [isGo, setIsGo] = useState(true);
  const Navigate = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(async () => {
        const userData = JSON.parse(await AsyncStorage.getItem('userData'));
        if (userData) {
          Navigate.navigate('ScreenContainer');
          setIsGo(false);
        } else {
          Navigate.navigate('Login');
          setIsGo(false);
        }
      }, 500);
    }
  }, []);

  return (
    <View style={style.container}>
      <Image 
        source={require('../assets/images/splash_screen.png')}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
