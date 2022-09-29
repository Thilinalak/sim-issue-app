import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Header} from '../components/Header';
import {Notification} from '../components/Notification';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';
import { useFocusEffect } from '@react-navigation/native';

export const NotificationScreen = () => {

  useFocusEffect(
    React.useCallback(()=>{

      const fetchData = async () => {
        try {
          const issueID = JSON.parse(await AsyncStorage.getItem('issueId'));
          const userData = JSON.parse(await AsyncStorage.getItem('userData'));
          setIssueid(issueID)
          await axios
            .get(
              `http://10.141.101.21:5000/api/notifications/get-notification/${issueID}`,
              {'headers' : {Authorization: `Bearer ${userData.userToken}`}}
            )
            .then(resp => {
              if(!resp.data.error){setNotificationList(resp.data.notifications)}
              else{
                toast.show(resp.data.error, {
                  type: 'info',
                  placement: 'bottom',
                  duration: 1500,
                  offset: 30,
                  animationType: 'slide-in',
                });
                setNotificationList(0)
              }
            })
            .catch(err => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
      };
      fetchData()
    },[setNotificationList,setIssueid])
  )

  const [notificationList, setNotificationList] = useState([]);
  const [issueid, setIssueid] = useState('');
  const toast = useToast()
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.container2}>
        <Text style={styles.textStyle}>{t('notification2')}</Text>

        <ScrollView style={styles.container3}>
          {
          notificationList.length > 0 ? (
            notificationList.map((noti, index) => (
              <View style={styles.container33} key={index}>
                <Notification issueid={issueid} notificationText={noti.notificationText}/>
              </View>
            ))
          ) : (
            <Text>No notifications</Text>
          )}
        </ScrollView>
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
    fontSize: 30,
    marginTop: 20,
  },
  textNumber: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container2: {
    marginTop: 25,
  },
  container3: {
    marginTop: 30,
  },
  container33: {
    marginTop: 5,
  },
});
