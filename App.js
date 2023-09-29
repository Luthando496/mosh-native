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

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Electronics",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[1]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ListingEditScreen  />
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
