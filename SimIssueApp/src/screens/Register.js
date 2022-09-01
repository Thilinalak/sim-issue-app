import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View ,Text, SafeAreaView,} from 'react-native'
import { Button } from '../components/Button'
import { MyTextInput } from '../components/MyTextInput'
import { useTranslation} from 'react-i18next' 


const Register = () => {

    const {t,i18n} = useTranslation()
    const Navigate = useNavigation()
    
    const register = ()=>{
        Navigate.navigate('Login')
    }

  return (
        <View style={style.container}>
            <Text style={style.textStyle}>{t('registertext')}</Text>
            <View style={style.contentCenter}>
            <Text style={style.text}>{t('details')}</Text>
                <MyTextInput name='fullname' placeholder={t('full name')} />
                <MyTextInput name='email'keyboardType={'email-address'} placeholder={t('email')} />
                <MyTextInput name='mobile'keyboardType={'numeric'} placeholder={t('mobile')} />
                <Text style={style.text}>{t('password')}</Text>
                <MyTextInput name='password1' secureTextEntry={true} placeholder={t('password')} />
                <MyTextInput name='password2' secureTextEntry={true} placeholder={t('re-enter password')} />
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
    }
    
})


export default Register