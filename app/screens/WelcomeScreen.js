import React from 'react'
import { ImageBackground, View,Text ,StyleSheet, Image} from 'react-native'
import MyButton from '../components/MyButton'

const WelcomeScreen = () => {
    // const image = {uri:''}

  return (
        <ImageBackground style={styles.welcome} resizeMode="cover" blurRadius={4}  className='flex-1 justify-center'   source={require('../assets/images/pexels-medhat-ayad-447592.jpg')} >
          <View style={styles.logoContainer}>
           <Image style={styles.logoImage} source={require('../assets/logo-red.png')} />
            <Text className='text-xl font-semibold mt-4'>Sell What You Don't Need</Text>
          </View>
            <View className='w-full px-2'>
            <MyButton bgColor='bg-amber-400'>Login</MyButton>
            </View>
            <View className='w-full px-2 my-4'>
            <MyButton bgColor='bg-sky-400'>Register</MyButton>
            </View>
        </ImageBackground>
  )
}

const styles = StyleSheet.create({
    welcome: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    logoImage:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:'absolute',
        alignItems:'center',
        top:60,
    },
    loginBtn:{
        backgroundColor:'#000000',
        color:'#fff',
        borderRadius:3,
        paddingVertical:20,
        width:"100%",
    },
    register:{
        backgroundColor:'tomato',
        color:'#fff',
        borderRadius:3,
        marginVertical:3,
        paddingVertical:20,
        width:"100%",
    }
})

export default WelcomeScreen