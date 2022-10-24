import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import axios from 'axios';
import {StyleSheet, View, Text, TextInput, Image, BackHandler} from 'react-native';
import {Button} from '../components/Button';
import {useTranslation} from 'react-i18next';
import {useToast} from 'react-native-toast-notifications';
import { CustomTextInput } from '../components/CustomTextInput';
import {IP_ADDRESS}  from '@env'


const Register = () => {

  const {t, i18n} = useTranslation();
  const Navigate = useNavigation();
  const toast = useToast();

  const [fullname, setFullname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const  isValidEmail = (emailaddress) =>{
    return /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g.test(emailaddress);
  }

  const register = () => {
    if (
      fullname.trim().length == 0 ||
      mobile.trim().length == 0 ||
      email.trim().length == 0 ||
      password1.trim().length == 0 ||
      password2.trim().length == 0
    ) {
      toast.show(t('all fields are required'), {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    }else if(!isValidEmail(email)){
      toast.show(t('please enter valid email'), {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    } 
    else if (password1 !== password2) {
      toast.show(t('passwords are not matching'), {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    } else {
      axios
        .post(`http://${IP_ADDRESS}:5000/api/users/register`, {
          fullname,
          mobile,
          email,
          password1,
        })
        .then(resp => {
          if (!resp.data.Error) {
            toast.show(t(resp.data.message), {
              type: 'success',
              placement: 'bottom',
              duration: 4000,
              offset: 30,
              animationType: 'slide-in',
            });
            Navigate.navigate('Login');
          } else {
            toast.show(t(resp.data.Error), {
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
    <View style={style.container}>
      <Text style={style.textStyle}>{t('registertext')}</Text>
      <View style={style.contentCenter}>
      <View style={style.image}>

<Image style={{width:120, height:120, marginTop:20}} source={require('../assets/images/add-user.png')}/>
  </View>
        <Text style={style.text}>{t('details')}</Text>
        <View style={{marginTop:-18}}>
        <CustomTextInput
          onChangeText={val => setFullname(val)}
          name={"fullname"}
          value={fullname}
          placeholder={t('full name')}
          iconName={"person"}
        />
        </View>
        <View style={style.textFieldPosition}>
        <CustomTextInput
          onChangeText={val => setEmail(val)}
          name={"email"}
          value={email}
          keyboardType={'email-address'}
          placeholder={t('email')}
          iconName={"mail"}
        />
        </View>
        
        <View style={style.textFieldPosition}>
        <CustomTextInput
          onChangeText={val => setMobile(val)}
          name={"mobile"}
          value={mobile}
          keyboardType={'numeric'}
          placeholder={t('mobile')}
          iconName={"phone-portrait"}
        />
        </View>
        <Text style={style.text}>{t('password')}</Text>
        <View style={style.passwordsContainer}>
        <View style={style.textFieldPosition}>
        <CustomTextInput
          onChangeText={val => setPassword1(val)}
          name={"password1"}
          value={password1}
          secureTextEntry={true}
          placeholder={t('password')}
          iconName={"lock-closed"}
        />
        </View>
        <View style={style.textFieldPosition}>
        <CustomTextInput
          onChangeText={val => setPassword2(val)}
          name={"password2"}
          value={password2}
          secureTextEntry={true}
          placeholder={t('re-enter password')}
          iconName={"lock-closed"}
        />
        </View>
        </View>

        <View style={{marginTop:20,marginLeft:60,marginRight:60}}>
        <Button  btnStyle={style.buttonStyle} title={t('signup')} onPress={register} />
        <Text onPress={()=> Navigate.goBack()} style={style.alreadyRegistered}>{t('already registered?')}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
  alreadyRegistered:{
    alignSelf:'center',
    color:'#4254f5'
  },
  contentCenter: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image:{
    marginTop:-40,
    marginBottom:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFieldPosition:{
    marginTop:-40
  },
  passwordsContainer:{
    marginTop:20
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop:0
  },
});

export default Register;
