import React from 'react'
import { Text } from 'react-native'



const ErrorMessage = ({children}) => {
  return (
    <Text className='text-red-400 font-bold text-base'>{children}</Text>
  )
}

export default ErrorMessage
