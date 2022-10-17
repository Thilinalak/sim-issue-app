import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export const ChangeLanguageModal = (props) => {

  const {t,i18n} = useTranslation()

  const closeChangeLanguageModal =(data,bool)=>{
    data === 'English'? 
    changeToEnglish():
    changeToSinhala() 
    props.changeLanguageModalVisible(bool)
}

const changeToEnglish = ()=>{
  i18n.changeLanguage('en')
  }
const changeToSinhala = ()=>{
  i18n.changeLanguage('si')
  }

  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <TouchableOpacity disabled={true} style={styles.container2}>
          <Text style={styles.text1}>{t('select language')}</Text>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={()=>closeChangeLanguageModal('English',false)} style={styles.container3}>
            <Text style={styles.text}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>closeChangeLanguageModal('සිංහල',false)} style={styles.container3}>
            <Text style={styles.text}>සිංහල</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 150,
    width: WIDTH - 80,
    backgroundColor: 'white',
  },
  buttonView: {},
  container2: {
    padding: 15,
    backgroundColor: 'purple',
  },
  container3: {
    padding: 15,
  },
  text1: {
    color: 'white',
  },
  text: {
    color: 'black',
  },
});
