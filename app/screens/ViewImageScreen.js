import React from 'react'
import { Image, View,StyleSheet, Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'



const ViewImageScreen = () => {
  return (
    <>
    <View className='bg-black flex-1'>
    <View className=' absolute top-10 left-8'>
      <Ionicons name='close' color='teal' size={60}></Ionicons>
    </View>
      <View className='absolute top-10 right-8 '>
        <Ionicons name='trash-bin' color='white' size={40}></Ionicons>
      </View>
        <Image style={styles.image} className='w-full h-full ' resizeMode='contain' source={require('../assets/images/chair.jpg')} />
     </View>
    </>
  )
}


const styles = StyleSheet.create({
    image:{
        
    }
})

export default ViewImageScreen