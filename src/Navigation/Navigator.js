import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './BottomNav';
import Map from '../Screens/Map';
import Sucess from '../Screens/Sucess';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomNav"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Sucess" component={Sucess} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
