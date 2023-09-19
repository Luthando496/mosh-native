import React from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const AvatarUI = ({ image, subTitle, title, renderRightActions,IconComponent }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Pressable
        style={({ pressed }) => pressed && styles.press}
        onPress={() => console.log()}
      >
        {({ pressed }) => {
          return (
            <View className={`flex-row  ${pressed && "bg-sky-400/20"} px-4 `}>
              {image ? <Image
                className="w-[80px] rounded-full h-[80px]"
                source={image}
              /> : IconComponent}
              <View className="flex-col justify-center  ml-4">
                <Text className="font-semibold text-xl text-sky-400">
                  {title}
                </Text>
                {subTitle && <Text className="font-semibold text-sm text-gray-500">
                  {subTitle}
                </Text>}
              </View>
            </View>
          );
        }}
      </Pressable>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  press: {
    opacity: 0.2,
  },
});

export default AvatarUI;
