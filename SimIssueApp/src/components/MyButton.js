import React from 'react'
import { Button,View ,StyleSheet,} from 'react-native'

export const MyButton = ({
  title,
  onPress,
  type,
  color,
  btnStyle,
  btnSize
}) => {
  return (
    <View style={styles.styleBtn}>
        <Button color={color} type={type} onPress={onPress} title={title}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  styleBtn: {
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },
});