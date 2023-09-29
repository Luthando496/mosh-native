import React from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from '@expo/vector-icons';


const AvatarUI = ({ image, subTitle, title, renderRightActions,IconComponent }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Pressable
        style={({ pressed }) => pressed && styles.press}
        onPress={() => console.log()}
      >
        {({ pressed }) => {
          return (
            <View className={`flex-row  ${pressed && "bg-sky-400/20"} px-4 items-center`}>
              {image ? <Image
                className="w-[80px] rounded-full h-[80px]"
                source={image}
              /> : IconComponent}
              <View className="flex-col justify-center  ml-4 flex-1">
                <Text numberOfLines={1} className="font-semibold text-xl text-sky-400">
                  {title}
                </Text>
                {subTitle && <Text numberOfLines={2} className="font-semibold text-sm text-gray-500">
                  {subTitle}
                </Text>}
              </View>
              <MaterialCommunityIcons color={'pink'} name='chevron-right' size={30} />
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
