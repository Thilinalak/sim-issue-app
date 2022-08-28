import React from 'react'
import { View, TouchableOpacity,Text,StyleSheet , Dimensions} from 'react-native'

const WIDTH = Dimensions.get('window').width

export const ChnageLanguageModal = () => {
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
        <View style={styles.modal}>
        
            
        </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        height: 180,
        width: WIDTH - 80,
        padding:10,
        backgroundColor:'white'
    }
})
