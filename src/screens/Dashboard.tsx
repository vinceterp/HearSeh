/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, View, Text} from 'react-native';

interface DashboardProps {
  userName?: string;
}

const Dashboard = (props: DashboardProps) : JSX.Element => {
  return (
		<View>
			<Text>Dashboard</Text>
		</View>
	);
};

export default Dashboard;
