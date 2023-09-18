import React from 'react'
import { View ,Image,Text,ScrollView} from "react-native";
import AvatarUI from '../components/AvatarUI';


const ListDetailScreen = ({image,price,title}) => {
  return (
    <ScrollView className='mb-4'>
    <View className='w-full overflow-hidden rounded-xl bg-white/80'>
        <Image className='w-full h-[300px] ' resizeMode='cover' source={image} />
        <View className='p-4 space-y-2'>
      <Text className='text-sm capitalize font-bold text-gray-800'>{title}</Text>
      <Text className='text-sm text-yellow-700 capitalize font-bold '>${price}</Text>
      <AvatarUI image={require('../assets/images/mosh.jpg')} numListings='6 listings' title='Luthando Didiza' />
        </View>
    </View>

    </ScrollView>
  )
}

export default ListDetailScreen