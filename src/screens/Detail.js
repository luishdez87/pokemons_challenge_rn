import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import useGetPokemonDetails from '../data/hooks/useGetPokemonDetails';
import Species from './Species';

const Detail = ({ route, navigation }) => {
const { pokemon: selected } = route.params;

const { pokemon, loading } = useGetPokemonDetails(selected.url);
  if (loading) {
    return (
      <ActivityIndicator />
    );
  }
  return (
    <>
      {pokemon && (
        <ImageBackground style={style.container} source={require('../assets/images/pokemons.jpg')} >
          <View style={style.window} >
            <Text style={style.title}> {pokemon.name} </Text>
            <View style={style.row}>
              <Image source={{ uri: pokemon.sprites.front_default}} style={style.sprite} />
              <View >
                <View style={[style.types, style.row]}>
                  {pokemon.types.map((type, i) => (
                    <Text style={{color: 'white'}} key={i}> {type.type.name} {i + 1 < pokemon.types.length ? '/' : null }</Text>
                  ))}
                </View>
                {pokemon.stats.map((stat, i) => (
                  <Text  key={i}> {stat.stat.name}: {stat.base_stat} </Text>
                ))}
              </View>
            </View>
          </View>
          <View style={style.actions}>
            <Species species={pokemon.species} />
          </View>
          <TouchableOpacity 
            onPress={() =>  navigation.goBack()}
            style={style.button}>
            <Text style={style.centerText}>Back to the list </Text>
          </TouchableOpacity>

        </ImageBackground>
      )}
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  window: {
    borderColor: '#B0B0B0',
    borderWidth: 6,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white'
  },
  centerText: {
    textAlign: 'center'
  },
  actions: {
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  sprite: {
    height: 150,
    width: 150
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  types: {
    display: 'flex',
    backgroundColor: '#73C3E0',
    padding: 10,
    borderRadius: 15
  },
  button: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#f8f8f8',
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
})

export default Detail;
