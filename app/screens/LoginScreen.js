import { Image, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import MyButton from "../components/MyButton";
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from "../components/forms/ErrorMessage";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})




const LoginScreen = (props) => {
    

  return (
    <View className="px-4">
      <Image
        className="w-[80px] h-[80px] self-center mt-[50px] mb-5"
        source={require("../assets/logo-red.png")}
      />

      <AppForm
      initialValues={{ email: '',password:'' }}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}>

<AppFormField
        name='email'
        placeholder="Email"
        keyboardType="email-address"
        icon="email"
        // value={values.email}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <AppFormField
        placeholder="Password"
        icon="lock"
        name='password'
        // value={values.password}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <SubmitButton>Login</SubmitButton>
      </AppForm>

      
      
    </View>
  );
};

export default LoginScreen;
