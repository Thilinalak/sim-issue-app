import React from 'react'
import { TouchableOpacity, View ,Text, StyleSheet, Dimensions} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Card = ({text, onPress}) => {
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
        width: Dimensions.get('window').width - 270,
        height:Dimensions.get('window').height - 620,
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