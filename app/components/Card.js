import React from 'react'
import { View, Text ,StyleSheet, Image,Pressable} from 'react-native'



const Card = ({price,title,image}) => {
  return (
    <View className='flex-1 px-4 mt-10 mb-4'>
    <View style={styles.card} className='w-full overflow-hidden rounded-xl bg-teal-100'>
        <Image className='w-full h-[200px] ' resizeMode='cover' source={image} />
        <View className='p-4 space-y-2'>
      <Text className='text-sm capitalize font-bold text-gray-800'>{title}</Text>
      <Text className='text-sm text-yellow-700 capitalize font-bold '>${price}</Text>
        </View>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        elevation:40
    },
    pressed:{
      opacity:0.5
    }
})

export default Card