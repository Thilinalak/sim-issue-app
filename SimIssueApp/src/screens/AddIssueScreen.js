import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Header} from '../components/Header';
import {Button} from '../components/Button';

export const AddIssueScreen = () => {


  const onSubmit = ()=>{
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.container2}>
        <Text style={styles.textStyle}>Issue Type</Text>
        <View>
          <TouchableOpacity disabled={true} style={styles.roundCircle}>
            <Text style={styles.issueType}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
      <Text style={styles.textStyle}>Remark</Text>
      <TextInput style={styles.textArea} multiline={true}  numberOfLines={10}  scrollEnabled={true} maxLength={255}  placeholder='Your Issue'/>
      </View>
      <View style={styles.container4}>
        <Button title={'Submit'}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    textArea:{
        backgroundColor:'#ffffff',
        marginTop:20,
        borderColor: '#323aa8',
        borderWidth:1,
        fontSize:16,
        padding:10,
        textAlignVertical:'top'
    },
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
  issueType: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  roundCircle: {
    borderRadius: 25,
    backgroundColor: '#f56342',
    alignItems:'center',
    justifyContent:'center',
    width: 70,
    height: 30,
    marginTop:10
  },
  container2: {
    marginTop: 25,
  },
  container3: {
    marginTop:20,
  },
  container4: {
    marginTop:20,
    marginLeft:170,
    marginRight:-45,
  },
});