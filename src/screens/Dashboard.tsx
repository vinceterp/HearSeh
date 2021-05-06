/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import styles from '../styles/styles';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

interface DashboardProps {
  userName?: string;
}

const Dashboard = (props: DashboardProps) : JSX.Element => {
	const scheme = useColorScheme()
  	return (
		<AppearanceProvider>
			<NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
				<View 
				style={scheme === "dark" ? styles.darkModeContainer : styles.container}
				>
					<Text style= {{color: scheme === "dark" ? '#fff' : '#000000'}}>Dashboard</Text>
				</View>
			</NavigationContainer>
		</AppearanceProvider>
	);
};

export default Dashboard;
