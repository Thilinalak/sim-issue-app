import React from 'react'
import { TouchableOpacity, View ,Text, StyleSheet} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Card = ({text, icon, onPress}) => {
  return (
    <View>
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <FontAwesome name="user" size={40} color='#940016'/>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    </View>
  )}

  const styles = StyleSheet.create({
    card: {
        width:165,
        height:165,
        backgroundColor:'#cc8cfa',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
      },
      textStyle:{
        color:'black',
        fontSize:16
      },
  })