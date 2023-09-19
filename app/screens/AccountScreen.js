import React from "react";
import { FlatList, Text, View } from "react-native";
import AvatarUI from "../components/AvatarUI";
import Icon from "../components/Icon";

const items = [
  {
    title: "My Listings",
    subTitle: "luthando@gmail.com",
    IconComponent: (
      <Icon
        name="format-list-bulleted"
        size={40}
        iconColor="gold"
        backgroundColor="teal"
      />
    ),
  },
  {
    title: "My Messages",
    subTitle: "luthando@gmail.com",
    IconComponent: (
      <Icon
        name="email"
        size={40}
        iconColor="gold"
        backgroundColor="teal"
      />
    ),
  },
];

const AccountScreen = () => {
  return (
    <>
      <View className="my-4">
        <AvatarUI
          title="title"
          subTitle={"luthando@gmail.com"}
          image={require("../assets/images/mosh.jpg")}
        />
      </View>
      <View className="py-4 bg-gray-100">
        <FlatList
          data={items}
          ItemSeparatorComponent={()=> <View style={{ height: 15 }} ></View>}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <AvatarUI title={item.title} IconComponent={item.IconComponent} />
            );
          }}
        />
      </View>
      <View className="mt-4 ">
      <AvatarUI title='logout' IconComponent={<Icon
        name="logout"
        size={40}
        iconColor="white"
        backgroundColor="orange"
      />} />
      </View>
    </>
  );
};

export default AccountScreen;
