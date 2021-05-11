/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Landing from './src/screens/Landing';
import MainNavigation from './src/navigations/MainNavigation';

const { height, width } = Dimensions.get('window');

const App: () => Node = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <MainNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
