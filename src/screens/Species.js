import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useGetSpecies from '../data/hooks/useGetSpecies';

const Species = (species) => {
  if (species) {
    const specie = useGetSpecies(species.species.url);
    if (specie) {
      const entry = specie.flavor_text_entries.find((entry) => {
        if (entry.language.name === 'es') {
          return entry.flavor_text;
        }
      });

      return (
        <>
          {specie && (
            <View style={style.container}>
              <Text> {entry.flavor_text} </Text>
            </View>
          )}
        </>
      );
    }
  }

  return null;
}

const style = StyleSheet.create({
  container: {
    borderColor: '#B0B0B0',
    borderWidth: 6,
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: 'white'
  }
})

export default Species;
