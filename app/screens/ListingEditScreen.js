import { Image, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import MyButton from "../components/MyButton";
import { Formik } from "formik";
import {useState} from 'react';
import * as Yup from "yup";
import ErrorMessage from "../components/forms/ErrorMessage";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import PickerItem from "../components/PickerItem";
import AppPicker from "../components/AppPicker";
import CategoryPicker from "../components/CategoryPicker";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

  
const ListingEditScreen = () => {
  const [category, setCategory] = useState(null);


  const changeCategory =(item)=>{
    console.log(item.label)
    setCategory(item)
  }
  return (
    <View className="px-4">
      <Image
        className="w-[80px] h-[80px] self-center mt-[50px] mb-5"
        source={require("../assets/logo-red.png")}
      />

      <AppForm
        initialValues={{
          title: "",
          description: "",
          price: "",
          // category: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField maxLength={100} name="title" placeholder="Title" />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          // icon="email"
          // value={values.email}
          maxLength={8}
        />
        <AppPicker
          placeholder="Categories"
          items={categories}
          onSelectItem={changeCategory}
          // PickerItemComponent={CategoryPicker}
          name="categories"
          selectedItem={category}
          // numberOfCols={3}
          // value={values.password}
        />
        <AppFormField
        name='description'
        placeholder="Description"
        multiline
        numberOfLines={4}
        // icon="email"
        // value={values.email}
        maxLength={8}
      />
        <SubmitButton bgColor='bg-red-400' >Post</SubmitButton>
      </AppForm>
    </View>
  );
};

export default ListingEditScreen;
