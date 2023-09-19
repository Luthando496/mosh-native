import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet,SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MyButton from './app/components/MyButton';
import Card from './app/components/Card';
import ListDetailScreen from './app/screens/ListDetailScreen';
import MessageScreen from './app/screens/MessageScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from './app/components/Icon';
import AvatarUI from './app/components/AvatarUI';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';


export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
      <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingsScreen  />
      </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40

  },
});
