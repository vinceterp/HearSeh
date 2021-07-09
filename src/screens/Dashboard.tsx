/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, View, Text, Button} from 'react-native';
import styles from '../styles/styles';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import {AuthContext} from "../utils/context";

interface DashboardProps {
  userName?: string;
}

const Dashboard = (props: DashboardProps) : JSX.Element => {
	const scheme = useColorScheme();
	const {signOut} = React.useContext(AuthContext);
  	return (
		<AppearanceProvider>
			<View 
			style={scheme === "dark" ? styles.darkModeContainer : styles.container}
			>
				<Text style= {{color: scheme === "dark" ? '#fff' : '#000000'}}>Dashboard</Text>
				<Button title="Sign Out" onPress= {() =>{
					signOut();
				}}/>
			</View>
		</AppearanceProvider>
	);
};

export default Dashboard;
