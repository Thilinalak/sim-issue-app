import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View ,Text, SafeAreaView,} from 'react-native'
import {Button } from '../components/Button'
import { MyTextInput } from '../components/MyTextInput'
import { useTranslation } from 'react-i18next';


const Login = () => {

    const {t,i18n} = useTranslation()
    const Navigation = useNavigation()

    const gotoRegister = ()=>{
        Navigation.navigate('Register')
    }
    const signIn = ()=>{
        Navigation.navigate('ScreenContainer')
    }

  return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{t('logintext')}</Text>
            <View style={styles.contentCenter}>
                <MyTextInput name='username' keyboardType={'email-address'} placeholder={t('email')} />
                <MyTextInput name='password' secureTextEntry={true} placeholder={t('password')}/>
                <Button color={'blue'} title={t('signin')} onPress={signIn}/>
                <Button color={'red'} title={t('register here')} onPress={gotoRegister}/>
            </View>
            
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eff556' ,
        flex:1,
        padding:35
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


export default Login