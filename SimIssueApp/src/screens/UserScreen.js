import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Header} from '../components/Header';
import {SignOutModal} from '../components/SignOutModal';
import { ChangeLanguageModal } from '../components/ChangeLanguageModal';
import { useTranslation } from 'react-i18next';

export const UserScreen = () => {

  const {t,i18n} =  useTranslation()

  const [isSignOutModalVisible, SetIsSignOutModalVisible] = useState(false);
  const [ischangeLanguageModalVisible, SetIschangeLanguageModalVisible] =
    useState(false);

  const signOutModalVisible = bool => {
    SetIsSignOutModalVisible(bool);
  };
  const changeLanguageModalVisible = bool => {
    SetIschangeLanguageModalVisible(bool);
  };

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.container2}>
        <Text style={styles.textStyle}>{t('user2')}</Text>
        <View style={styles.container3}>


          <TouchableOpacity onPress={()=>changeLanguageModalVisible(true)} style={styles.square}>
            <Text style={styles.text}>{t('change language')}</Text>
          </TouchableOpacity>
          <Modal
          transparent={true}
          animationType='fade'
          visible={ischangeLanguageModalVisible}
          onValueChange={()=>changeLanguageModalVisible(false)} >
            <ChangeLanguageModal changeLanguageModalVisible={changeLanguageModalVisible}/>
          </Modal>

          <TouchableOpacity
            onPress={() => signOutModalVisible(true)}
            style={styles.square}>
            <Text style={styles.text}>{t('logout')}</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            onValueChange={() => signOutModalVisible(false)}
            animationType="fade"
            visible={isSignOutModalVisible}>
            <SignOutModal signOutModalVisible={signOutModalVisible} />
          </Modal>
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
  square: {
    paddingLeft :50,
    borderWidth: 1.2,
    backgroundColor: '#cab3f5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: window.width,
    height: 70,
  },
  text: {
    margin: 20,
    fontSize: 16,
    color: '#0f071f',
    fontWeight: 'bold',
  },
  container2: {
    marginTop: 25,
  },
  container3: {
    marginTop: 80,
  },
});
