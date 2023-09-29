import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  numberOfCols
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  placeholder,
  numberOfCols =1,
  items,
  selectedItem,
  onSelectItem,
  PickerItemComponent = PickerItem
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(selectedItem,'love')
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View className="flex-row rounded-3xl items-center bg-slate-300 w- p-4 my-3">
          {icon && (
            <MaterialCommunityIcons name={icon} size={35} className="mr-4" />
          )}
          {/* {selectedItem ? (
            <Text className="text-[15px] flex-1 font-semibold">
              {selectedItem.label}
            </Text>
          ) : (
            <Text className="text-[15px] flex-1 font-semibold text-amber-300">{placeholder}</Text>
          )} */}

          <Text className="text-[15px] flex-1 font-semibold ml-4">
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={35} className="" />
        </View>
      </TouchableWithoutFeedback>
      <Modal className="" visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(!modalVisible)} />
        <FlatList
          data={items}
          numColumns={numberOfCols}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => {
            return (
              <PickerItemComponent
                // label={item.label}
                item={item}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  onSelectItem(item);
                }}
              />
            );
          }}
        />
      </Modal>
    </>
  );
};

export default AppPicker;
