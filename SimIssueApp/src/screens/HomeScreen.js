import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Header} from '../components/Header';
import { Card } from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {

  const Navigation = useNavigation()
  const { t, i18n } = useTranslation();

  const addIssue = (type)=>{
      Navigation.navigate('AddIssueScreen')
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.container2}>
        <Text style={styles.textStyle}>{t('ongoingqueue')} </Text>
        <View>
          <TouchableOpacity disabled={true} style={styles.roundCircle}>
            <Text style={styles.textNumber}>20</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
        <Card onPress={()=> addIssue('New sim request')} text={t('New Sim Request')}/>
        <Card onPress={()=>addIssue('Sim Not Working')} text={t('Sim Not Working')}/>
      </View>
      <View style={styles.container4}>
        <Card onPress={()=>addIssue('Sim Registration')} text={t('Sim Registraion')}/>
        <Card onPress={()=>addIssue('Other')} text={t('Other')}/>
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
