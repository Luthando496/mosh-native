import React from 'react'
import { Image ,View,Text, StyleSheet, Pressable} from 'react-native'

const AvatarUI = ({image,subTitle,title}) => {
  return (
    <Pressable style={({pressed})=> pressed && styles.press} onPress={()=>console.log()}>
    {({pressed})=>{
      return (
        <View className={`flex-row mt-6 ${pressed && 'bg-sky-400/20'} px-4 py-3`}>
        <Image className='w-[80px] rounded-full h-[80px]' source={image} />
        <View className='flex-col justify-center ml-4'>
            <Text className='font-semibold text-xl text-sky-400'>{title}</Text>
            <Text className='font-semibold text-sm text-gray-500'>{subTitle}</Text>
        </View>
    </View>
      )
    }}
    </Pressable>
 
  )
}

const styles = StyleSheet.create({
  press: {
    opacity: 0.2,
  }
})

export default AvatarUI