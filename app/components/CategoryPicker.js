import React from 'react';
import {View,Text} from 'react-native';
import Icon from './Icon';


const CategoryPicker = ({item,onPress}) => {
 return (
        <View className='px-4 w-[33%] items-center py-10'>
            <Icon  backgroundColor={item.backgroundColor} name={item.icon}  size={80}  />
            <Text className='text-xl text-center font-semibold text-sky-400 mt-4'>{item.label}</Text>
        </View>
 );

};
export default CategoryPicker;