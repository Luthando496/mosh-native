import React from 'react'
import { Text, View,Pressable,StyleSheet } from 'react-native'

const MyButton = ({onPress,children,color,bgColor}) => {
  return (
    <Pressable className='w-full' style={({pressed})=> pressed && styles.pressed } onPress={onPress}>
        <View className={`${bgColor ? bgColor : 'bg-sky-500'} px-4 py-3 rounded-full w-full'`}>
            <Text className={`text-xl text-center ${color ? color : 'text-white'} tracking-[5px] uppercase font-medium`}>{children}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.5,
    }
})

export default MyButton