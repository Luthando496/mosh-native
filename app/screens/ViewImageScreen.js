import React from 'react'
import { Image, View,StyleSheet, Text } from 'react-native'

const ViewImageScreen = () => {
  return (
    <>
    <View>
        <Image style={styles.image} className='w-[100%] h-[100%] ' resizeMode='contain' source={require('../assets/images/chair.jpg')} />
     </View>
    </>
  )
}


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%'
    }
})

export default ViewImageScreen