import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomNav"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomNav" component={BottomNav} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
