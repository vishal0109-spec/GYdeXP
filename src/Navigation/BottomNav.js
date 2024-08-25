import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Chat from '../Screens/Chat';
import Lores from '../Screens/Lores';
import Profile from '../Screens/Profile';
import Services from '../Screens/Services';
import {styles} from '../Screens/style';
import {Animated, Image, Text, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {chatt, home, lores, profilee, services} from '../Utils/img';

const BottomTab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.customBottom,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={{
                alignItems: 'center',
                marginLeft: wp(3),
              }}>
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'transparent',
                  marginBottom: focused ? hp(1.5) : 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#16181A' : '#8F8F8F',
                    width: hp(2.6),
                    height: hp(2.5),
                  }}
                  source={home}
                />
              </View>

              <Text
                style={{
                  color: focused ? 'white' : '#8F8F8F',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Home
              </Text>
            </Animated.View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Lores"
        component={Lores}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={{
                alignItems: 'center',
                marginLeft: wp(3),
              }}>
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'transparent',
                  marginBottom: focused ? hp(1.5) : 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#16181A' : '#8F8F8F',
                    width: hp(2.6),
                    height: hp(2.5),
                  }}
                  source={lores}
                />
              </View>

              <Text
                style={{
                  color: focused ? 'white' : '#8F8F8F',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Lores
              </Text>
            </Animated.View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={{
                alignItems: 'center',
                marginLeft: wp(3),
              }}>
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'transparent',
                  marginBottom: focused ? hp(1.5) : 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#16181A' : '#8F8F8F',
                    width: hp(2.6),
                    height: hp(2.5),
                  }}
                  source={services}
                />
              </View>

              <Text
                style={{
                  color: focused ? 'white' : '#8F8F8F',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Services
              </Text>
            </Animated.View>
          ),
        }}
      />

      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={{
                alignItems: 'center',
                marginLeft: wp(3),
              }}>
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'transparent',
                  marginBottom: focused ? hp(1.5) : 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#16181A' : '#8F8F8F',
                    width: hp(2.6),
                    height: hp(2.5),
                  }}
                  source={chatt}
                />
              </View>

              <Text
                style={{
                  color: focused ? 'white' : '#8F8F8F',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Chat
              </Text>
            </Animated.View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={{
                alignItems: 'center',
                marginLeft: wp(3),
              }}>
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'transparent',
                  marginBottom: focused ? hp(1.5) : 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#16181A' : '#8F8F8F',
                    width: hp(2.6),
                    height: hp(2.5),
                  }}
                  source={profilee}
                />
              </View>

              <Text
                style={{
                  color: focused ? 'white' : '#8F8F8F',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Profile
              </Text>
            </Animated.View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNav;
