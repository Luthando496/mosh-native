import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import AvatarUI from "../components/AvatarUI";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initial = [
  {
    id: 1,
    title: "djd",
    description: "ndcbhdbvujdbvj",
    image: require("../assets/pexels-medhat-ayad-447592.jpg"),
  },
  {
    id: 2,
    title: "djdd",
    description: "ndcbccchdbvujdbvj",
    image: require("../assets/images/mosh.jpg"),
  },
  {
    id: 3,
    title: "djd",
    description: "ndcbhdbvujdbvj",
    image: require("../assets/images/couch.jpg"),
  },
];

const MessageScreen = () => {
    const [messages, setMessages] = useState(initial);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (id) => {
        const newMessages = messages.filter((item) => item.id!== id);

        setMessages(newMessages);

    }
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      refreshing={refreshing}
      onRefresh={()=>{
        setMessages([{
    id: 3,
    title: "djd",
    description: "ndcbhdbvujdbvj",
    image: require("../assets/images/couch.jpg"),
  },]);
      }}
      renderItem={({ item }) => {
        return (
          <AvatarUI
            title={item.title}
            image={item.image}
            subTitle={item.description}
            renderRightActions={()=> <ListItemDeleteAction onPress={()=>handleDelete(item.id)} />}
          />
        );
      }}
    />
  );
};

export default MessageScreen;
