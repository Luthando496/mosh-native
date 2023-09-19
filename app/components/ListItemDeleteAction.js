import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <View className="w-[80px] bg-amber-400/80 justify-center items-center">
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.press}
      >
        <Ionicons className="" name="trash-sharp" size={34} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  press: {
    opacity: 0.3,
  },
});

export default ListItemDeleteAction;
