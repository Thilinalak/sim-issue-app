import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, BackHandler} from 'react-native';
import {Button} from '../components/Button';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomTextInput } from '../components/CustomTextInput';
import {IP_ADDRESS} from '@env'


const Login = () => {

  useEffect(()=>{
    const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=>BackHandler.exitApp());
      return () => backHandler.remove()
  },[])

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
      toast.show(t('Both Fields are Required'), {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    } else {
      axios
        .post(`http://${IP_ADDRESS}:5000/api/users/login`, {username, password})
        .then(async res => {
          if (!res.data.Error) {
            try {
              const userData = {
                user: res.data.user,
                userToken: res.data.userToken,
              };
              await AsyncStorage.setItem('userData', JSON.stringify(userData));
              Navigation.navigate('ScreenContainer');
            } catch (error) {
              console.log(error);
            }
          } else {
            toast.show(t(res.data.Error), {
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
        <View style={styles.image}>

      <Image style={{width:150, height:150}} source={require('../assets/images/user.png')}/>
        </View>


        <CustomTextInput
         name={'username'}
         value={username}
         onChangeText={val => setUsername(val)}
          keyboardType={'email-address'}
          placeholder={t('email')}
          iconName={"person"}
         />
<View style={styles.textFieldPosition}>
<CustomTextInput
         name={'password'}
         value={password}
         onChangeText={val => setPassword(val)}
          placeholder={t('password')}
          secureTextEntry={true}
          iconName={"lock-closed"}
         />
</View>

        

        
        {/* <FontAwesome5 style={styles.icon} name="user" size={20} /> */}
        {/* <TextInput
          style={styles.input}
          name="username"
          value={username}
          onChangeText={val => setUsername(val)}
          keyboardType={'email-address'}
          placeholder={t('email')}/> */}
        {/* <FontAwesome5 style={styles.icon} name="password" size={20} /> */}
        {/* <TextInput
          style={styles.input}
          name="password"
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
          placeholder={t('password')}
        /> */}
        <View style={{marginTop:20,marginLeft:60,marginRight:60}}>
        <Button btnStyle={styles.buttonStyle} title={t('signin')} onPress={signIn} />
        <Button
        btnStyle={styles.buttonStyle}
          title={t('register here')}
          onPress={gotoRegister}
        />
        </View>
        
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
  buttonStyle:{
    backgroundColor:'#323cf0',
  },
  textFieldPosition:{
    marginTop:-40
  },
  image:{
    marginTop:-90,
    marginBottom:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    marginTop:50,
    marginBottom:-35,
    marginLeft:18
    
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
    borderRadius:50,
    paddingLeft: 45,
    paddingRight: 20,
    fontSize: 18,
    color:'black',
    borderColor:'blue',
  },
});

export default Login;
