import React from 'react'
import { TextInput,View ,StyleSheet,} from 'react-native'

export const MyTextInput = ({
    onChangeNumber,
    placeholder,
    value,
    secureTextEntry,
    keyboardType
}) => {
  return (
    <View>
        <TextInput 
        secureTextEntry={secureTextEntry}
        style={styles.input}
        onChangeText={onChangeNumber}
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
