import { useNavigation } from '@react-navigation/native'
import  React,{useState} from 'react'
import { StyleSheet, View ,Text, SafeAreaView,TextInput} from 'react-native'
import {Button } from '../components/Button'
import { MyTextInput } from '../components/MyTextInput'
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { useToast } from "react-native-toast-notifications";


const Login = () => {

    const {t,i18n} = useTranslation()
    const Navigation = useNavigation()
    const toast = useToast()

    const [username, setUsername] = useState('')
    const [passowrd, setPassword] = useState('')

    const gotoRegister = ()=>{
        Navigation.navigate('Register')
    }
    const signIn = ()=>{

        if(username.trim().length == 0 || passowrd.trim().length == 0){
            toast.show("Both Fields are Required !", {
                type: "danger",
                placement: "bottom",
                duration: 4000,
                offset: 30,
                animationType: "slide-in",
              });
        }else{

        axios.post('http://localhost:5000/api/users/login',{username,passowrd})
        .then(res =>{
            console.log(res.data);
        })
        .catch(err => console.log(err))
            
        }
        // Navigation.navigate('ScreenContainer')
    }

  return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{t('logintext')}</Text>
            <View style={styles.contentCenter}>
                <TextInput style={styles.input}  name='username' onChangeText={(val)=>setUsername(val)}  keyboardType={'email-address'} placeholder={t('email')} />
                <TextInput style={styles.input} name='password' onChangeText={(val)=>setPassword(val)}  secureTextEntry={true} placeholder={t('password')}/>
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
    input: {
        height: 50,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        fontSize:18
      },
    
})


export default Login