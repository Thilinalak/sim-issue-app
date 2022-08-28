import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../assets/images/sim-card-100.png')}
      />
      <View style={styles.txtPosition}>
        <Text style={styles.textHello}>Hello</Text>
        <Text style={styles.textName}>Thilina Lakshan</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 70,
    height: 70,
  },
  textHello: {
    fontSize: 25,
    color: 'black',
  },
  textName: {
    color: 'black',
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtPosition: {
    marginTop:7,
    marginRight:160  },
});
