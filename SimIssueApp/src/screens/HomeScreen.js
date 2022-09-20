import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity,Dimensions, Alert} from 'react-native';
import {Header} from '../components/Header';
import { Card } from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';

export const HomeScreen = () => {

  const [issues, setIussues] = useState([])
  const [queueNo, setQueueNo] = useState('')
  useEffect(()=>{

    const fetchData = async()=>{
      await axios.get(`http://172.23.214.206:5000/api/issues/`)
      .then(rsp =>{
        !rsp.data.Error ?
        setIussues(rsp.data)
        : console.log(rsp.data.Error);
        
      })
      .catch(err=> console.log(err))

      setQueueNo( JSON.parse(await AsyncStorage.getItem('queueNo')))
    }
    fetchData()
  },[setQueueNo])

  
  const toast = useToast()
  const navigation = useNavigation()
  const { t, i18n } = useTranslation();

  const addIssue = (issueID , issue)=>{
    queueNo == 0 ?
      navigation.navigate('AddIssueScreen',{issueId: issueID, issueText: issue})
      : toast.show('You have already Submitted an Issue!', {
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
      {queueNo > 0 ? (
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
        <Card onPress={()=> addIssue(issues[0].id, issues[0].issue_type)} text={t('New Sim Request')}/>
        <Card onPress={()=>addIssue(issues[1].id, issues[1].issue_type)} text={t('Sim Not Working')}/>
      </View>
      <View style={styles.container4}>
        <Card onPress={()=>addIssue(issues[2].id, issues[2].issue_type)} text={t('Sim Registraion')}/>
        <Card onPress={()=>addIssue(issues[3].id, issues[3].issue_type)} text={t('Other')}/>
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
