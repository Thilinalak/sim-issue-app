import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Header} from '../components/Header';
import {SignOutModel} from '../components/SignOutModel';
import { ChnageLanguageModal } from '../components/ChnageLanguageModal';

export const UserScreen = () => {
  const [isSignOutModelVisible, SetIsSignOutModelVisible] = useState(false);
  const [ischangeLanguageModelVisible, SetIschangeLanguageModelVisible] =
    useState(false);

  const signOutModelVisible = bool => {
    SetIsSignOutModelVisible(bool);
  };
  const changeLanguageModelVisible = bool => {
    SetIschangeLanguageModelVisible(bool);
  };

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.container2}>
        <Text style={styles.textStyle}>User</Text>
        <View style={styles.container3}>


          <TouchableOpacity onPress={()=>changeLanguageModelVisible(true)} style={styles.square}>
            <Text style={styles.text}>Change Language</Text>
          </TouchableOpacity>
          <Modal
          transparent={true}
          animationType='fade'
          visible={ischangeLanguageModelVisible}
          onValueChange={()=>changeLanguageModelVisible(false)} >
            <ChnageLanguageModal/>
          </Modal>

          <TouchableOpacity
            onPress={() => signOutModelVisible(true)}
            style={styles.square}>
            <Text style={styles.text}>SignOut</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            onValueChange={() => signOutModelVisible(false)}
            animationType="fade"
            visible={isSignOutModelVisible}>
            <SignOutModel signOutModelVisible={signOutModelVisible} />
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
    borderWidth: 1.2,
    backgroundColor: '#cab3f5',
    alignItems: 'center',
    justifyContent: 'center',
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
