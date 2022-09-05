import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import axios from 'axios'
import { StyleSheet, View ,Text, TextInput,} from 'react-native'
import { Button } from '../components/Button'
import { MyTextInput } from '../components/MyTextInput'
import { useTranslation} from 'react-i18next' 
import { useToast } from "react-native-toast-notifications";


const Register = () => {

    const {t,i18n} = useTranslation()
    const Navigate = useNavigation()
    const toast = useToast()

    const [fullname, setFullname] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [passowrd1, setPassword1] = useState('')
    const [passowrd2, setPassword2] = useState('')


    const register = ()=>{

        if(fullname.trim().length == 0 || mobile.trim().length == 0 ||
        email.trim().length == 0 || passowrd1.trim().length == 0 || passowrd2.trim().length == 0){
            toast.show("All Fields are Required !", {
                type: "danger",
                placement: "bottom",
                duration: 4000,
                offset: 30,
                animationType: "slide-in",
              });
        }else if (passowrd1 !== passowrd2){
            toast.show("Passwords are not matching !", {
                type: "danger",
                placement: "bottom",
                duration: 4000,
                offset: 30,
                animationType: "slide-in",
              });
        }else{
            
            axios.post("http://localhost:5000/api/users/register",{
                fullname,mobile,email,passowrd1
            })
            .then(resp =>{
                console.log(resp.data);
                Navigate.navigate('Login')

            })
            .catch(err =>console.log(err))
        }
    }

  return (
        <View style={style.container}>
            <Text style={style.textStyle}>{t('registertext')}</Text>
            <View style={style.contentCenter}>
            <Text style={style.text}>{t('details')}</Text>
                <TextInput style={style.input} onChangeText={(val)=>setFullname(val)} name='fullname' placeholder={t('full name')} />
                <TextInput style={style.input} onChangeText={(val)=>setEmail(val)} name='email'keyboardType={'email-address'} placeholder={t('email')} />
                <TextInput style={style.input} onChangeText={(val)=>setMobile(val)} name='mobile'keyboardType={'numeric'} placeholder={t('mobile')} />
                <Text style={style.text}>{t('password')}</Text>
                <TextInput style={style.input} onChangeText={(val)=>setPassword1(val)} name='password1' secureTextEntry={true} placeholder={t('password')} />
                <TextInput style={style.input} onChangeText={(val)=>setPassword2(val)} name='password2' secureTextEntry={true} placeholder={t('re-enter password')} />
                <Button color={'red'} title={t('signup')} onPress={register}/>
            </View>
            
        </View>
  )
}

const style = StyleSheet.create({
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
    text:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        paddingBottom:6
    },
    input: {
        height: 50,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        fontSize:18
      },
    
})


export default Register