import React from 'react'
import { Pressable, View ,Text} from 'react-native'

const PickerItem = ({item,onPress}) => {
  return (
    <Pressable onPress={onPress} className=''>
        <View>
            <Text className='p-5'>{item.label}</Text>
        </View>
    </Pressable>
  )
}

export default PickerItem
