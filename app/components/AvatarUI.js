import React from 'react'
import { Image ,View,Text} from 'react-native'

const AvatarUI = ({image,numListings,title}) => {
  return (
    <View className='flex-row mt-6'>
        <Image className='w-[80px] rounded-full h-[80px]' source={image} />
        <View className='flex-col justify-center ml-4'>
            <Text className='font-semibold text-xl text-sky-400'>{title}</Text>
            <Text className='font-semibold text-sm text-gray-500'>{numListings}</Text>
        </View>
    </View>
  )
}

export default AvatarUI