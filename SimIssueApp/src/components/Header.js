import React,{useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {View, Text, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Header = () => {

  useEffect(()=>{
      const getUserInfo =async()=>{
        const userData = JSON.parse(await AsyncStorage.getItem('userData')) 
        setFullName(userData.user.fullname)
      }
      getUserInfo()
  },[])

  const [fullname, setFullName] = useState()
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../assets/images/logo.png')}
      />
      <View style={styles.txtPosition}>
        <Text style={styles.textHello}>{t('hello')}</Text>
        <Text style={styles.textName}>{fullname}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 70,
    height: 70,
  },
  textHello: {
    fontSize: 25,
    color: 'black',
  },
  textName: {
    color: 'black',
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
  },
  txtPosition: {
    marginTop:7,
    marginLeft:20  },
});
