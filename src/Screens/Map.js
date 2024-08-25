import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import MapView, {Marker} from 'react-native-maps';
import Button from '../Components/CustomButton';
import {
  back,
  clock,
  down,
  headerBar,
  location,
  markerIcon,
  markerIcon2,
} from '../Utils/img';
import {darkMapStyle, gydeData} from '../Utils/data';
import {useNavigation} from '@react-navigation/native';
import Sucess from './Sucess';

const Map = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        customMapStyle={darkMapStyle}
        initialRegion={{
          latitude: 26.92367031399679, // Latitude for Jaipur
          longitude: 75.82727497768873, // Longitude for Jaipur
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          coordinate={{
            latitude: 26.92367031399679,
            longitude: 75.82727497768873,
          }}
          onPress={() => setOpen2(true)}>
          <View style={styles.markerView}>
            <Image source={markerIcon} style={styles.markerImage} />
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: 26.924294490060184,
            longitude: 75.82680022668475,
          }}
          onPress={() => setOpen2(true)}>
          <View style={styles.markerView}>
            <Image source={markerIcon2} style={styles.markerImage} />
          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: 26.92215605003909,
            longitude: 75.82785466760357,
          }}
          onPress={() => setOpen2(true)}>
          <View style={styles.markerView}>
            <Image source={markerIcon2} style={styles.markerImage} />
          </View>
        </Marker>
      </MapView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open2}
        onRequestClose={() => setOpen2(false)}>
        <TouchableWithoutFeedback onPress={() => setOpen2(false)}>
          <View style={StyleSheet.absoluteFill}>
            {/* Overlay to dim the background */}
            <View style={styles.overlay} />
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.editModalContainer}>
                <View style={styles.editModal2}>
                  <Button
                    icon={headerBar}
                    iconStyle={styles.headerBarStyle}
                    style={styles.headerBar}
                  />
                  <View style={styles.gyde2}>
                    <Image source={clock} style={styles.clock} />
                    <Text style={styles.gydeTxt}>Gyde Now</Text>
                    <Button
                      icon={down}
                      iconStyle={styles.downBtn}
                      onPress={() => setOpen(false)}
                    />
                  </View>
                  <View style={styles.tripContainer}>
                    <FlatList
                      data={gydeData}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <Image source={item.image} style={styles.gydeImage} />
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                  <View style={styles.searchBtnContainer}>
                    <Button
                      style={styles.searchBtn}
                      title="Book Now"
                      btnStyle={styles.searchBtnTxt}
                      onPress={() => navigation.navigate(Sucess)}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Button icon={back} style={styles.backIcon} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => setOpen(false)}>
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View style={StyleSheet.absoluteFill}>
            {/* Overlay to dim the background */}
            <View style={styles.overlay} />
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.editModalContainer}>
                <View style={styles.editModal}>
                  <Button
                    icon={headerBar}
                    iconStyle={styles.headerBarStyle}
                    style={styles.headerBar}
                  />
                  <View style={styles.gyde2}>
                    <Image source={clock} style={styles.clock} />
                    <Text style={styles.gydeTxt}>Gyde Now</Text>
                    <Button
                      icon={down}
                      iconStyle={styles.downBtn}
                      onPress={() => setOpen(false)}
                    />
                  </View>
                  <View style={styles.thngContainer}>
                    <Image source={location} style={styles.loctt} />
                    <View style={styles.thngTxtContainer}>
                      <Text style={styles.yourTxt}>Your current location</Text>
                      <Text style={styles.avblTxt}>6+ Gydes Available</Text>
                    </View>
                  </View>
                  <View style={styles.searchBtnContainer}>
                    <Button
                      style={styles.searchBtn}
                      title="Search"
                      btnStyle={styles.searchBtnTxt}
                      onPress={() => setOpen(false)}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default Map;
