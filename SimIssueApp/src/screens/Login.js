import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text,  TextInput} from 'react-native';
import {Button} from '../components/Button';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  // const [isUser, setIsUser] = useState()

  // useEffect(()=>{

  //   const checkUserLogged = async()=>{
  //     try {
  //       const userdata  = JSON.parse(await AsyncStorage.getItem('userData'))
  //       setIsUser(userdata)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   checkUserLogged()
  // },[setIsUser])

  const {t, i18n} = useTranslation();
  const Navigation = useNavigation();
  const toast = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const gotoRegister = () => {
    Navigation.navigate('Register');
  };
  const signIn = () => {
    if (username.trim().length == 0 || password.trim().length == 0) {
      toast.show('Both Fields are Required !', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    } else {
      axios
        .post('http://172.22.22.98:5000/api/users/login', {username, password})
        .then(async res => {
          if (!res.data.Error) {
            try {
              const userData = {
                user: res.data.user,
                userToken: res.data.userToken,
              };
              await AsyncStorage.setItem('userData', JSON.stringify(userData));
              toast.show(res.data.message, {
                type: 'success',
                placement: 'bottom',
                duration: 4000,
                offset: 30,
                animationType: 'slide-in',
              });
              Navigation.navigate('ScreenContainer');
            } catch (error) {
              console.log(error);
            }
          } else {
            toast.show(res.data.Error, {
              type: 'danger',
              placement: 'bottom',
              duration: 4000,
              offset: 30,
              animationType: 'slide-in',
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{t('logintext')}</Text>
      <View style={styles.contentCenter}>
        <TextInput
          style={styles.input}
          name="username"
          onChangeText={val => setUsername(val)}
          keyboardType={'email-address'}
          placeholder={t('email')}
        />
        <TextInput
          style={styles.input}
          name="password"
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
          placeholder={t('password')}
        />
        <Button color={'blue'} title={t('signin')} onPress={signIn} />
        <Button
          color={'red'}
          title={t('register here')}
          onPress={gotoRegister}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eff556',
    flex: 1,
    padding: 35,
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
  input: {
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
});

export default Login;
