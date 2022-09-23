import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Header} from '../components/Header';
import {Button} from '../components/Button';
import {useTranslation} from 'react-i18next';
import {ScreenContainer} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export const AddIssueScreen = ({route}) => {
  const addIssueScreenStack = createNativeStackNavigator();

  useEffect(() => {
    setIssueType(route.params.issueText);
    setIssueTypeId(route.params.issueId);
  }, [route]);

  const [issueType, setIssueType] = useState('');
  const [issueTypeId, setIssueTypeId] = useState('');
  const [issue, setIssue] = useState('');

  const {t, i18n} = useTranslation();
  const toast = useToast();
  const navigation = useNavigation();

  const onSubmit = async () => {
    if (issue.trim().length == 0) {
      toast.show('Please enter your issue first !', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    } else {
      try {
        const userData = JSON.parse(await AsyncStorage.getItem('userData'));
        await axios
          .post(`http://172.22.22.98:5000/api/issues/add-issue`, {
            userId: userData.user.id,
            issueTypeId,
            issue,
          },{'headers':{
            Authorization: `Bearer ${userData.userToken}`
          }})
          .then(async(res) => {
            
            if (!res.data.error) {
              await AsyncStorage.setItem('queueNo' ,JSON.stringify(res.data.queueNo))
              toast.show(res.data.message, {
                type: 'success',
                placement: 'bottom',
                duration: 4000,
                offset: 30,
                animationType: 'slide-in',
              });
              navigation.navigate('HomeScreen')
            } else {
              toast.show(res.data.error, {
                type: 'danger',
                placement: 'bottom',
                duration: 4000,
                offset: 30,
                animationType: 'slide-in',
              });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.container2}>
        <Text style={styles.textStyle}>{t('issue type')}</Text>
        <View>
          <TouchableOpacity disabled={true} style={styles.roundCircle}>
            <Text style={styles.issueType}>{t(issueType)}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
        <Text style={styles.textStyle}>{t('remark')}</Text>
        <TextInput
          style={styles.textArea}
          name="issue"
          onChangeText={val => setIssue(val)}
          multiline={true}
          numberOfLines={10}
          scrollEnabled={true}
          maxLength={255}
          placeholder={t('add issue here')}
        />
      </View>
      <View style={styles.container4}>
        <Button onPress={onSubmit} title={t('submit')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textArea: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderColor: '#323aa8',
    borderWidth: 1,
    fontSize: 16,
    padding: 10,
    textAlignVertical: 'top',
  },
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
  issueType: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  roundCircle: {
    borderRadius: 25,
    backgroundColor: '#f56342',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 30,
    marginTop: 10,
  },
  container2: {
    marginTop: 25,
  },
  container3: {
    marginTop: 20,
  },
  container4: {
    marginTop: 20,
    marginLeft: 170,
    marginRight: -45,
  },
});
