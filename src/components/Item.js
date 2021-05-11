import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Item = ({ pokemon, navigation }) => {

  const goToDetail = () => {
    navigation.push('Detail', { pokemon })
  }
  return (
    <TouchableOpacity style={style.container} onPress={goToDetail} >
      <Text style={style.name} > {pokemon.name} </Text>
      <Image source={require('../assets/images/chevron.png')} style={style.icon} />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E6E6E6',
    justifyContent: 'space-between',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    alignContent: 'center',
    height: 60,
    padding: 10
  },
  name: {
    fontSize: 20
  },
  icon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight: 10
  }
})

export default Item;
