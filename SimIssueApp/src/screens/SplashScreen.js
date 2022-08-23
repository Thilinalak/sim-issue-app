import { useNavigation } from '@react-navigation/native'
import React ,{ useEffect, useState } from 'react'
import { StyleSheet, View ,Text, Image} from 'react-native'


const SplashScreen = () => {

    const [isGo, setIsGo] = useState(true)
    const Navigate = useNavigation()

    useEffect(()=>{
        if(isGo == true){
            setTimeout(()=>{
                Navigate.navigate('Login')
                setIsGo(false)
            },2000)
        }
    },[])

  return (
        <View style={style.contentCenter}>
            <Image source={require('../assets/images/sim-card-100.png')} style={style.imageStyle}/>
        </View>
  )
}

const style = StyleSheet.create({
    contentCenter:{
        backgroundColor:'white',
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    imageStyle: {width:150,height:150}
})

export default SplashScreen