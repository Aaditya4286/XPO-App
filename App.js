import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  Share,
} from 'react-native';
import Dashboard from './Screen/Dashboard'
import Login from './Screen/Login'
import Forgot from './Screen/Forgot'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack'
import Navigation from './Navigation';
import DetailsScreen from './Screen/DetailsScreen';
import * as Clipboard from 'expo-clipboard';

const App = () => {
  return (
      // <Dashboard/>
      <Navigation/>
  );
};

export default App;
