import React from 'react'
import { Image, View,StyleSheet, Text } from 'react-native'

const ViewImageScreen = () => {
  return (
    <>
    <View className='bg-black flex-1'>
      <View className='w-[50px] h-[50px] absolute top-10 left-8 bg-amber-500'></View>
      <View className='w-[50px] h-[50px] absolute top-10 right-8 bg-slate-500'></View>
        <Image style={styles.image} className='w-full h-full ' resizeMode='contain' source={require('../assets/images/chair.jpg')} />
     </View>
    </>
  )
}


const styles = StyleSheet.create({
    image:{
        // width:'100%',
        // height:'100%'
    }
})

export default ViewImageScreen