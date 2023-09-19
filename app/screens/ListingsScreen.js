import React from "react";
import { FlatList, View } from "react-native";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Title 1",
    price: 190,
    image: require("../assets/images/couch.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    price: 234,
    image: require("../assets/images/mosh.jpg"),
  },
  {
    id: 3,
    title: "Title 3",
    price: 739,
    image: require("../assets/images/chair.jpg"),
  },
  {
    id: 4,
    title: "Title 1",
    price: 190,
    image: require("../assets/images/jacket.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <View>
      <FlatList data={listings} keyExtractor={(item) => item.id.toString()} renderItem={({item})=>{
        return(
            <Card  title={item.title} price={item.price} image={item.image} key={item.id} />
        )
      }}/>
    </View>
  );
};

export default ListingsScreen;
