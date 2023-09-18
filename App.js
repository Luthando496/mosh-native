import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button,Text, View,Alert,SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MyButton from './components/MyButton';

export default function App() {
  return (
    <>
      <SafeAreaView className='flex-1'>
        <StatusBar style="dark" />
        {/* <ViewImageScreen /> */}
        <WelcomeScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
