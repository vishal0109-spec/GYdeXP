import {View, Text, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  bevarage,
  bs,
  cog,
  de,
  ffv,
  Ham,
  logoo,
  mf,
  search,
} from '../Utils/img';

const categories = [
  { id: '1', name: 'Fresh Fruits & Vegetable', image: ffv, bgColor: '#E8F5E9' },
  { id: '2', name: 'Cooking Oil & Ghee', image: cog, bgColor: '#FFF3E0' },
  { id: '3', name: 'Meat & Fish', image: mf, bgColor: '#FFEBEE' },
  { id: '4', name: 'Bakery & Snacks', image: bs, bgColor: '#F3E5F5' },
  { id: '5', name: 'Dairy & Eggs', image: de, bgColor: '#FFFDE7' },
  { id: '6', name: 'Beverages', image: bevarage, bgColor: '#E3F2FD' },
  { id: '7', name: 'Fresh Fruits & Vegetable', image: ffv, bgColor: '#E8F5E9' },
  { id: '8', name: 'Cooking Oil & Ghee', image: cog, bgColor: '#FFF3E0' },
];


const Home = () => {

  const renderCategory = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.categoryCard, { backgroundColor: item.bgColor }]}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoo} style={styles.logo} />
        <Image source={Ham} style={styles.bell} />
      </View>

      <View style={styles.header2}>
        <Text style={styles.header2Txt}>Find Products</Text>
      </View>

      <View style={styles.searchBar}>
        <Image source={search} style={styles.searchIcon} />
        <TextInput
          style={styles.searchIconTxt}
          placeholder="Search Stores"
          placeholderTextColor="#7C7C7C"
        />
      </View>

      <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.categoryList}
    />
     
    </View>
  );
};

export default Home;
