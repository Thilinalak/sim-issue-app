import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, BackHandler, Alert} from 'react-native';
import {Header} from '../components/Header';
import { Card } from '../components/Card';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';
import {IP_ADDRESS}  from '@env'

export const HomeScreen = () => {

  const [issues, setIussues] = useState([])
  const [queueNo, setQueueNo] = useState('')

  useFocusEffect(
    React.useCallback(() => {

      const fetchData = async()=>{
        await axios.get(`http://${IP_ADDRESS}:5000/api/issues/`)
        .then(rsp =>{
          !rsp.data.Error ?
          setIussues(rsp.data)
          : console.log(rsp.data.Error);
          
        })
        .catch(err=> console.log(err))
        setQueueNo( JSON.parse(await AsyncStorage.getItem('queueNo')))
      }
    
      fetchData()
      const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=>BackHandler.exitApp());
      return () => backHandler.remove()
    
    }, [setQueueNo]));

  
  const toast = useToast()
  const navigation = useNavigation()
  const { t, i18n } = useTranslation();

  const addIssue = async(issueID , issue)=>{
    queueNo == null ?
      navigation.navigate('AddIssueScreen',{issueId: issueID, issueText: issue})
      : toast.show(t('you have already submitted an issue'), {
        type: 'warning ',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Header/>
      </View>
      {queueNo != null ? (
        <View style={styles.container2}>
        <Text style={styles.textStyle}>{t('ongoingqueue')} </Text>
        <View>
          <TouchableOpacity disabled={true} style={styles.roundCircle}>
            <Text style={styles.textNumber}>{queueNo}</Text>
          </TouchableOpacity>
        </View>
      </View>
      ) : (<View style={styles.container22}></View>)}
      
      <View style={styles.container3}>
        <Card name={"sim-card"} color={"purple"} size={100} onPress={()=> addIssue(issues[0].id, issues[0].issue_type)} text={t('new sim request')}/>
        <Card  name={"times"} color={"purple"} size={100} onPress={()=>addIssue(issues[1].id, issues[1].issue_type)} text={t('sim not working')}/>
      </View>
      <View style={styles.container4}>
        <Card  name={"user-plus"} color={"purple"} size={80} onPress={()=>addIssue(issues[2].id, issues[2].issue_type)} text={t('sim registration')}/>
        <Card  name={"question-circle"} color={"purple"} size={80} onPress={()=>addIssue(issues[3].id, issues[3].issue_type)} text={t('other')}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eff556',
    flex: 1,
    padding: 20,
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    marginTop: 20,
  },
  textNumber: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  roundCircle: {
    borderRadius: 100,
    backgroundColor: '#f56342',
    alignItems:'center',
    justifyContent:'center',
    width: 60,
    height: 60,
    borderColor:'black',
    borderWidth:1,
  },
  container2: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container22: {
    marginTop: 50,
  },
  container3: {
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container4: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
