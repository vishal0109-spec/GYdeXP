import { View, Text, Image } from 'react-native'
import React from 'react'
import { done } from '../Utils/img'
import Button from '../Components/CustomButton'
import { styles } from './style'
import Home from './Home'
import { useNavigation } from '@react-navigation/native'

const Sucess = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.sucessContainer}>
      <Image source={done} style={styles.done} />
      <Text style={styles.bookedText}>Your Guide is booked</Text>
      <Text style={styles.thnkText}>Thank you for patronizing us today.</Text>
      <Text style={styles.thnkText}> Your guide will be added to your chats.</Text>
      <Text style={styles.redirectText}>Redirecting you in 5 secs</Text>
      <Button
      title='Go Back'
      style={styles.backButton}
      btnStyle={styles.searchBtnTxt}
      onPress={() => navigation.navigate(Home)}
      />

    </View>
  )
}

export default Sucess