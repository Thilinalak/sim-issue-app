import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View ,StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { useToast } from 'react-native-toast-notifications';
import { useTranslation } from 'react-i18next';
import {IP_ADDRESS} from '@env'

export const Notification = ({issueid,notificationText}) => {

  const IssueCompleted = async()=>{
    try {
       const userData = JSON.parse(await AsyncStorage.getItem('userData'))
      await axios.put(`http://${IP_ADDRESS}:5000/api/notifications/issue-completed`,{issueid},
      {'headers':{
        Authorization: `Bearer ${userData.userToken}`
      }}
      )
      .then(async(resp) =>{
          if(!resp.data.error){
            await AsyncStorage.removeItem('issueId')
            await AsyncStorage.removeItem('queueNo')
            Alert.alert("", t(resp.data.message), [
              { text: "OK", onPress: () =>  navigation.navigate('HomeScreen') }
            ]);
            
          }else{
            toast.show(t(resp.data.error),{
              type:'danger',
              placement:'bottom',
              animationType:'slide-in',
              offset:30,
              duration:4000

            })
          }
      })
      
    } catch (err) {
      console.log(err);
    }
   
  }

  const navigation = useNavigation()
  const toast = useToast()
  const {t ,i18n} = useTranslation()
  return (
    <View>
         <TouchableOpacity onPress={()=> IssueCompleted()} style={styles.oval}>
            <Text style={styles.text}>{notificationText}</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    oval: {
        borderRadius: 50,
        borderWidth:1.2,
        backgroundColor: '#8950f2',
        alignItems:'flex-start',
        justifyContent:'center',
        width: window.width,
        height: 90,
        paddingLeft:20
      },
      text:{
        margin:20,
        fontSize:15,
        color: '#ffffff',
        fontWeight:'bold',
        
      }
})
