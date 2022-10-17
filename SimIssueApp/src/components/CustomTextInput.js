import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CustomTextInput = ({
  name,iconName,
    onChangeText,
    placeholder,
    value,
    secureTextEntry,
    keyboardType
}) => {
  return (
    <View style={styles.searchSection}>
        <Ionicons style={styles.icon} name={iconName} color={'purple'} size={20} />
      <TextInput
        style={styles.input}
        name={name}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius:50,
        marginLeft:0,
        width:408,
    height: 50,
        margin:25
    },
    icon: {
        paddingLeft: 15,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 0,
        marginLeft:15,
        fontSize:18,
        borderRadius:50,
        backgroundColor: '#fff',
        color: '#424242',
    },
})