import React from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <View style={style.container} >
      <Image source={require('../assets/images/loupe.png')} style={style.icon} />
      <TextInput value={value} onChangeText={onChange} placeholder={placeholder} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#20232A',
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#f8f8f8'
  },
  icon: {
    marginTop: 10,
    height: 30,
    width: 30
  }
});

export default Input;
