import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MyButton from "./app/components/MyButton";
import Card from "./app/components/Card";
import ListDetailScreen from "./app/screens/ListDetailScreen";
import MessageScreen from "./app/screens/MessageScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./app/components/Icon";
import AvatarUI from "./app/components/AvatarUI";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import {Alert} from 'react-native'


export default function App() {
  const [imageUrls, setImage] = useState([]);


    const handlerAdd=(uri)=>{
      setImage((prev)=> [...prev,uri])
    }

    const handleRemove=(uri)=>{
      Alert.alert('Remove Image','Are you sure you want to remove this image?',[{text:'Yes',onPress:()=>setImage(imageUrls.filter(url=> url !== uri))},{text:'No'}])
      
    }

//   const removeImageHandler =()=>{
//     if(!imageUrls) {
//       pickImage()
//   }else{
//     Alert.alert('Remove Image','Are you sure you want to remove this image?',[{text:'Yes',onPress:()=>setImage(null)},{text:'No'}])
//   }
// }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <GestureHandlerRootView style={{ flex: 1 }}>
        <ImageInputList onAddImage={handlerAdd} onRemoveImage={handleRemove} imageUri={imageUrls} />
          {/* <ListingEditScreen  /> */}
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
