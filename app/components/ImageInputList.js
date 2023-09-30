import React, { useRef } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ImageInput from '../ImageInput';


const ImageInputList = ({ imageUri = [], onRemoveImage, onAddImage }) => {
    const imageRef = useRef()
    return (
        <View>
        <ScrollView horizontal={true} ref={imageRef}  onContentSizeChange={()=> imageRef.current.scrollToEnd()} >
        <View className='flex-row'>
                {imageUri.map((uri, index) => {
                    return <ImageInput key={index} imageUri={uri} onRemoveImage={() => onRemoveImage(uri)} />
                })}

                <ImageInput onAddImage={uri => onAddImage(uri)} />
            </View>
        </ScrollView>
        </View>
    );
}
export default ImageInputList;