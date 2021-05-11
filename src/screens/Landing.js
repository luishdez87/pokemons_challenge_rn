import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, FlatList, ImageBackground } from 'react-native';
import Input from '../components/Input';
import Item from '../components/Item';
import useGetPokemons from '../data/hooks/useGetPokemons';

const Landing = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const renderItem = ({ item }) => (
    <Item pokemon={item} navigation={navigation} />
  )

  const handleEnd = () => {
    setPage(prev => prev + 1);
  }
  const { pokemons, loading } = useGetPokemons(page);

  const pokemonsFilter = () => {
    if (!search) {
      return pokemons;
    }
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <ImageBackground style={style.container} source={require('../assets/images/pokemons.jpg')}>

      <Input placeholder="Search pokemon" value={search} onChange={setSearch} />
      {pokemons && (
        <>
          <FlatList
            data={pokemonsFilter()}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            style={style.list}
            onEndReached={handleEnd}
          />
          {loading && <ActivityIndicator />}
        </>
      )}
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 30,
    backgroundColor: '#f8f8f8'
  },
  list: {
    marginTop: 10
  }
});

export default Landing;
