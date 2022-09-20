import React from 'react'
import { Text,View ,StyleSheet,TouchableOpacity} from 'react-native'

export const Button = ({
  title,
  onPress,
  color,
  btnStyle,
  btnSize
}) => {
  return (
    <View >
        <TouchableOpacity style={styles.styleBtn} onPress={onPress} >
          <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  styleBtn: {
    height:40,
    // width:150,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    marginBottom:10,
    marginLeft: 50,
    marginRight: 50,
    
  },
  btnBorder: {
    height:40,
    borderWidth:2,
    borderColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    marginBottom:10,
    marginLeft: 50,
    marginRight: 50,
    
  },


  btnText:{
    color:'#ffffff',
    justifyContent:'center',
    alignItems: 'center',
    fontWeight:'bold',
    fontSize:16,
  },
});