import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styles from './styles/styles';
import { ExploreProps } from './screens/Explore';
import Explore from './screens/Explore';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Dashboard from './screens/Dashboard';

// import {createStackNavigator} from '@react-navigation/stack';
import createBottomTabNavigator from '@react-navigation/bottom-tabs';
import { NavigationPanel } from './components/NavigationPanel';
import {NativeRouter, Route} from 'react-router-native';

type RootParamList = {
  Home: {},
  Explore: {},
  Chat: {},
  Dashboard:{}
}

export default function App() {

  // const Root = createStackNavigator<RootParamList>()

  

  return (
    <View /*style={styles.container}*/>
        <NavigationPanel/>
    </View>);
}

