import React from 'react'
import { TouchableOpacity, View ,Text, StyleSheet, Dimensions, Image} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export const Card = ({text, onPress, name, size, color}) => {
  return (
    <View>
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <FontAwesome5 name={name} size={size} color={color} />
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
        borderWidth:0.8,
        borderColor:'black',
        borderRadius:10,
      },
      textStyle:{
        marginTop:10,
        fontWeight:'700',
        color:'black',
        fontSize:16
      },
  })