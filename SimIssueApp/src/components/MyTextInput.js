import React from 'react'
import { TextInput,View ,StyleSheet,} from 'react-native'

export const MyTextInput = ({
  name,
    onChange,
    placeholder,
    value,
    secureTextEntry,
    keyboardType
}) => {
  return (
    <View>
        <TextInput 
        name={name}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder} 
        keyboardType={keyboardType}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      marginBottom: 12,
      borderWidth: 1,
      padding: 10,
      fontSize:18
    },
  });
