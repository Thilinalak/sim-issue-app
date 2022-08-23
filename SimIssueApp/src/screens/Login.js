import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View ,Text, SafeAreaView,} from 'react-native'
import { MyButton } from '../components/MyButton'
import { MyTextInput } from '../components/MyTextInput'



const Login = () => {


    const Navigate = useNavigation()

    const gotoRegister = ()=>{
        Navigate.navigate('Register')
    }
    const signIn = ()=>{
        
    }

  return (
        <View style={style.container}>
            <Text style={style.textStyle}>Login</Text>
            <View style={style.contentCenter}>
            <MyTextInput name='username' keyboardType={'email-address'} placeholder={'Username'} />
            <MyTextInput name='password' secureTextEntry={true} placeholder={'Password'} />
            <MyButton color={'blue'} title={'SignIn'} onPress={signIn}/>
            <MyButton color={'red'} title={'SignUp'} onPress={gotoRegister}/>
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
    
})


export default Login