import React from 'react'
import { Text, View,FlatList } from 'react-native'
import AvatarUI from '../components/AvatarUI'


const messages =[{id:1,title:'djd',description:'ndcbhdbvujdbvj',image:require('../assets/pexels-medhat-ayad-447592.jpg')},{id:2,title:'djdd',description:'ndcbccchdbvujdbvj',image:require('../assets/images/mosh.jpg')},{id:3,title:'djd',description:'ndcbhdbvujdbvj',image:require('../assets/images/couch.jpg')}]

const MessageScreen = () => {
  return (
    <FlatList data={messages}  keyExtractor={(item)=> item.id.toString()} renderItem={({item})=>{
        return(
            <AvatarUI title={item.title} image={item.image} subTitle={item.description} />
        )
    }} />
  )
}

export default MessageScreen