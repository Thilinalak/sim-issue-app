import React from 'react'
import { View ,StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Notification = () => {
  return (
    <View>
         <TouchableOpacity style={styles.oval}>
            <Text style={styles.text}>Your the next number in the requested queue, Please be Prepare !</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    oval: {
        borderRadius: 100,
        borderWidth:1.2,
        backgroundColor: '#8950f2',
        alignItems:'center',
        justifyContent:'center',
        width: window.width,
        height: 90,
      },
      text:{
        margin:20,
        fontSize:15,
        color: '#ffffff',
        fontWeight:'bold'
        
      }
})
