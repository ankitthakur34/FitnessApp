import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { FitnessContext } from './Context';

export default function App() {
  return (
<FitnessContext>
    <StackNavigator/>
    </FitnessContext>
  );
}


