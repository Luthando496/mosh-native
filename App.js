import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button,Text, View,Alert,SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MyButton from './app/components/MyButton';
import Card from './app/components/Card';
import ListDetailScreen from './app/screens/ListDetailScreen';



export default function App() {
  return (
    <>
      <SafeAreaView className='flex-1'>
        <StatusBar style="dark" />
        {/* <ViewImageScreen /> */}
        <ListDetailScreen title='My bedroom in Cape' price={230} image={require('./app/assets/images/jacket.jpg')} />
        {/* <WelcomeScreen /> */}
        
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
