import {View, Text, Image, TextInput, FlatList} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  clock,
  down,
  Line,
  logoo,
  notification,
  search,
} from '../Utils/img';
import Button from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Map from './Map';
import { data1, exploreTripsData, featuredExperiencesData } from '../Utils/data';


const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoo} style={styles.logo} />
        <Image source={notification} style={styles.bell} />
      </View>

      <View style={styles.searchBar}>
        <Image source={search} style={styles.searchIcon} />
        <TextInput
          style={styles.searchIconTxt}
          placeholder="Search for Places"
          placeholderTextColor="#D9D9D9"
        />
        <Image source={Line} style={styles.line} />
        <View style={styles.gyde}>
          <Image source={clock} style={styles.clock} />
          <Text style={styles.gydeTxt}>Gyde Now</Text>
          <Button 
          icon={down} 
          iconStyle={styles.downBtn} 
          onPress={() => navigation.navigate(Map)} />
        </View>
      </View>

      <View style={styles.tripContainer}>
        <Text style={styles.heading}>Where to next {'>'} </Text>
        <FlatList
          data={data1}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.tripTxtContainer}>
                <Image source={item.icon} style={styles.icon} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.tripContainer}>
        <Text style={styles.heading}>Explore trips {'>'} </Text>
        <FlatList
          data={exploreTripsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.largeItemContainer}>
              <Image source={item.image} style={styles.largeImage} />
              <View style={styles.tripLocation}>
                <Image source={item.icon} style={styles.icon2} />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>

              <Text style={styles.largeTitle}>{item.title}</Text>

              <View style={styles.memoryContainer}>
                <View style={styles.memoryContainer2}>
                  <Text style={styles.memoriesText}>{item.memories}</Text>
                </View>

                <Text style={styles.priceText}>starting {item.price}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.tripContainer}>
        <Text style={styles.heading}>Featured Experiences {'>'} </Text>

        <FlatList
          data={featuredExperiencesData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.featuredItemContainer}>
              <Image source={item.image} style={styles.featuredImage} />
              <Text style={styles.featuredTitle}>{item.title}</Text>
              <Text style={styles.featuredDescription}>{item.description}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
