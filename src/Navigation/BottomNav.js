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
import {account, Cart,  explore, fav, shop} from '../Utils/img';

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
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#53B175' : '#181725',
                    width: hp(2.6),
                    height: hp(2.5),
                  }}
                  source={shop}
                />
              </View>

              <Text
                style={{
                  color: focused ? '#53B175' : '#181725',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Shop
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
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#53B175' : '#181725',
                    width: hp(3),
                    height: hp(2),
                  }}
                  source={explore}
                />
              </View>

              <Text
                style={{
                  color: focused ? '#53B175' : '#181725',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Explore
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
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#53B175' : '#181725',
                    width: hp(2.6),
                    height: hp(2.5),
                  }}
                  source={Cart}
                />
              </View>

              <Text
                style={{
                  color: focused ? '#53B175' : '#181725',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Cart
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
                  
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#53B175' : '#181725',
                    width: hp(2.5),
                    height: hp(2.3),
                  }}
                  source={fav}
                />
              </View>

              <Text
                style={{
                  color: focused ? '#53B175' : '#181725',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Favourite
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
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: wp(5),
                }}>
                <Image
                  style={{
                    tintColor: focused ? '#53B175' : '#181725',
                    width: hp(2.3),
                    height: hp(2.5),
                  }}
                  source={account}
                />
              </View>

              <Text
                style={{
                  color: focused ? '#53B175' : '#181725',
                  fontSize: hp(1.4),
                  fontWeight: '500',
                  marginBottom: hp(1.2),
                }}>
                Account
              </Text>
            </Animated.View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNav;
