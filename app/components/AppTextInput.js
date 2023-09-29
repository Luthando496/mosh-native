import {TextInput, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


const AppTextInput = ({icon,...otherProps}) => {
  return (
    <View className='flex-row rounded-3xl bg-slate-300 w- p-4 my-3'>
      {icon && <MaterialCommunityIcons name={icon} size={35} className='mr-4'  />}
      <TextInput className='text-xl ml-4' {...otherProps}  />
    </View>
  )
}

export default AppTextInput
