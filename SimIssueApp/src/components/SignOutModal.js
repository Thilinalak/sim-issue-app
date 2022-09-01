import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions} from 'react-native'

const WIDTH = Dimensions.get('window').width

export const SignOutModal = (props) => {

  const {t,i18n} =  useTranslation()


    const closeSignOutModal =(data,bool)=>{
        data !== 'Cancel'? signOut(bool) :
        props.signOutModalVisible(bool)
    }

    const signOut = (bool)=>{
        console.log("Sign Out HEre");
        props.signOutModalVisible(bool)
      }

  return (
        <TouchableOpacity disabled={true} style={styles.container} >
            <View style={styles.modal}>
                <View  style={styles.textView}>
                <Text style={styles.text}>Are sure you want to SignOut ?</Text>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={()=> closeSignOutModal('Cancel',false)} style={styles.touchableOpacity}>
                        <Text style={styles.textButton}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> closeSignOutModal('Yes',false)} style={styles.touchableOpacity}>
                        <Text style={styles.textButton}>Yes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:40,
        alignContent:'center',
        justifyContent:'center',
    },modal:{
        height: 130,
        width: WIDTH - 80,
        paddingTop:10,
        backgroundColor:'white',
    },
    textView:{
        flex:1,
        alignItems:'center'
    },
    text:{
        color:'black',
        margin:5,
        fontSize:20,
        fontWeight:'bold'
    },
    buttonsView:{
        width:'100%',
        flexDirection:'row',
        marginBottom:18
    },
    touchableOpacity:{
        flex:1,
        paddingVertical:10,
        alignItems:'center'
    },
    textButton:{
        color:'#1f0642',
        fontSize:16,
        fontWeight:'bold'
    }
})
