// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import styles from './styles/styles';

import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import Login from './screens/Login';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';

import {AuthContext} from "./utils/context";

const userToken = {
	value: "123456",
	expiresAt: "",
	createdAt: "",
}



const ActiveStack = createStackNavigator();
const ActiveStackScreen = ({userToken} : any) => {
	console.info(userToken);
	return (
		<ActiveStack.Navigator headerMode= "none">
			{userToken.value ? 
				(<ActiveStack.Screen
					name="LandingPage"
					component={LandingPage}
					options={{animationEnabled: false}}
				/>) : 
				(<ActiveStack.Screen
					name="Auth"
					component={Login}
					options={{animationEnabled: false}}
				/>)}
		</ActiveStack.Navigator>
	)
}

export default function App() {
	
	const scheme = useColorScheme();
	const [loggedInState, setLoggedIn] = useState({loggedIn: false});
	const [userTokenState, setUserToken] = useState({value: "", expiresAt: "", createdAt: ""});
	
	const authContext = React.useMemo(() => {
		return {
			signIn: () => {
				console.log("Signing in")
				setUserToken(userToken);
			},
			signOut: () => {
				setUserToken({value: "", expiresAt: "", createdAt: ""});
			}
		}
	}, []);

	//style={scheme === "dark" ? styles.darkModeContainer : styles.container}
	// console.info(userTokenState)
	return (  
		<AuthContext.Provider value= {authContext}>
			<NavigationContainer>
				<ActiveStackScreen userToken= {userTokenState}/>	
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

