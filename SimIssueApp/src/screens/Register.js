import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View ,Text, SafeAreaView,} from 'react-native'
import { MyButton } from '../components/MyButton'
import { MyTextInput } from '../components/MyTextInput'



const Register = () => {


    const Navigate = useNavigation()
    
    const register = ()=>{
        Navigate.navigate('Login')
    }

  return (
        <View style={style.container}>
            <Text style={style.textStyle}>Register</Text>
            <View style={style.contentCenter}>
            <Text style={style.text}>Details</Text>
                <MyTextInput name='fullname' placeholder={'Full Name'} />
                <MyTextInput name='email'keyboardType={'email-address'} placeholder={'Email'} />
                <MyTextInput name='mobile'keyboardType={'numeric'} placeholder={'Mobile'} />
                <Text style={style.text}>Password</Text>
                <MyTextInput name='password1' secureTextEntry={true} placeholder={'Password'} />
                <MyTextInput name='password2' secureTextEntry={true} placeholder={'Re-enter Password'} />
                <MyButton color={'red'} title={'SignUp'} onPress={register}/>
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