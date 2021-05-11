import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Landing from '../screens/Landing';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
