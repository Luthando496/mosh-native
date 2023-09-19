import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) => {
  return (
    <View
      style={{
        width: size,
        backgroundColor,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size-10} color={iconColor} />
    </View>
  );
};

export default Icon;
