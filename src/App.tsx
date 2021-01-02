import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HostComponent, StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles';
import { ExploreProps } from './screens/Explore';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Dashboard from './screens/Dashboard';
import Explore from './screens/Explore';
import Login from './screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import createBottomTabNavigator from '@react-navigation/bottom-tabs';

type RootParamList = {
  Home: {},
  Explore: {},
  Chat: {},
  Dashboard: {}
}

export default function App() {

  const Root = createStackNavigator<RootParamList>()

  const props: ExploreProps = {favorites: [], markers: []};

  return (
    <View style={styles.container}>
      <Explore />
    </View>
  );
}

