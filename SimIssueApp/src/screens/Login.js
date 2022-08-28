import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View ,Text, SafeAreaView,} from 'react-native'
import {Button } from '../components/Button'
import { MyTextInput } from '../components/MyTextInput'



const Login = () => {

    const Navigation = useNavigation()

    const gotoRegister = ()=>{
        Navigation.navigate('Register')
    }
    const signIn = ()=>{
        Navigation.navigate('ScreenContainer')
    }

  return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Login</Text>
            <View style={styles.contentCenter}>
                <MyTextInput name='username' keyboardType={'email-address'} placeholder={'Username'} />
                <MyTextInput name='password' secureTextEntry={true} placeholder={'Password'} />
                <Button color={'blue'} title={'SignIn'} onPress={signIn}/>
                <Button color={'red'} title={'SignUp'} onPress={gotoRegister}/>
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