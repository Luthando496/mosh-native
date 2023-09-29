import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { Field, useFormikContext} from 'formik';



const AppFormField = ({name,...OtherProps}) => {
    const { handleChange,handleBlur,errors,setFieldTouched,touched } = useFormikContext();
  return (
    <>
      {touched[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
      <AppTextInput
        // placeholder="Email"
        // keyboardType="email-address"
        // icon="email"
        {...OtherProps}
        onBlur={()=>setFieldTouched(name)}
        onChangeText={handleChange(name)}
        // value={values.email}
        // autoCapitalize="none"
        // autoCorrect={false}
      />
    </>
  )
}

export default AppFormField
