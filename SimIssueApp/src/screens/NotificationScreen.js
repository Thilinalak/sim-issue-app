import React from 'react'
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native'
import { Header } from '../components/Header';
import { Notification } from '../components/Notification';

export const NotificationScreen = () => {
  return (
   
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.container2}>
        <Text style={styles.textStyle}>Notifications</Text>
        <View style={styles.container3}>
            <Notification/>
        </View>
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
  container3:{
    marginTop:30
  }
});
