import React from 'react'
import { ImageBackground, View,Text ,StyleSheet, Image} from 'react-native'

const WelcomeScreen = () => {
    // const image = {uri:''}

  return (
        <ImageBackground style={styles.welcome} resizeMode="cover" className='flex-1 justify-center'   source={require('../assets/pexels-medhat-ayad-447592.jpg')} >
          <View style={styles.logoContainer}>
           <Image style={styles.logoImage} source={require('../assets/logo-red.png')} />
            <Text>Sell What You Don't Need</Text>
          </View>
            <View style={styles.loginBtn}>
            </View>
            <View style={styles.register}>
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