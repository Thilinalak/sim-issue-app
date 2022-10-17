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
        <TouchableOpacity style={[btnStyle, styles.button]} onPress={onPress} >
          <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    height:45,
    // width:150,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    marginBottom:10,
    // marginLeft: 50,
    // marginRight: 50,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10 ,
    shadowOffset : { width: 1, height: 5},
    
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