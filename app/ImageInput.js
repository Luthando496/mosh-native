import React, { useState } from 'react';
import { View, Text, Button, Image as ImageComponent ,Alert} from 'react-native';
import { launchImageLibraryAsync,MediaTypeOptions } from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';



const ImageInput = ({onAddImage,imageUri,onRemoveImage}) => {
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 6],
      quality: 0.8,
    });

    console.log(result, 'drake');

    if (!result.canceled) {
      onAddImage(result.assets[0].uri);
    }
  };

  return (
    <>
    <TouchableWithoutFeedback onPress={onRemoveImage}>
      <View className='bg-slate-300 rounded-lg justify-center overflow-hidden mr-3 items-center w-[100px] h-[100px]'>
        {!imageUri ? <MaterialCommunityIcons onPress={pickImage} name='camera' size={90} color='white' /> :
          <ImageComponent source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} />}
      </View>
      </TouchableWithoutFeedback>
    </>
  );
};
export default ImageInput;