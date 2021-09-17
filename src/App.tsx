// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import Login from './screens/Login';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import {AuthContext} from "./utils/context";
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';

const userToken = {
	value: "123456",
	expiresAt: "",
	createdAt: "",
}

const ActiveStack = createStackNavigator();
const ActiveStackScreen = ({ appState } : any) => {
	let token = appState && appState.userToken;
	console.info(token)
	// console.info(userToken);
	return (
		<ActiveStack.Navigator headerMode= "none">
			{token.value ? 
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
	const [appState, setAppState] = useState({
		'userToken': 
			{
				value: "", 
				expiresAt: "", 
				createdAt: ""
			}
		,'loggedIn': false});
	// const [loggedInState, setLoggedIn] = useState({loggedIn: false});
	// const [userTokenState, setUserToken] = useState({value: "", expiresAt: "", createdAt: ""});
	// const [fontsLoaded, setFontsLoadedState] = useState({fontsLoaded: false});

	const [fontsLoaded] = useFonts({
		Lobster: require('../assets/fonts/Lobster.ttf')
	})

	// if(!fontsLoaded){
	// 	return <AppLoading/>
	// }
	
	// const authContext= React.useMemo(()=>{
	// 	return {
	// 		signIn: () => {
	// 			console.log("logging in");
	// 		}
	// 	}
	// },[]);

	const authContext = React.useMemo(() => {
		return {
			signIn: () => {
				console.log("Signing in");
				setAppState({...appState, 'userToken': userToken, 'loggedIn': true});
			},
			signOut: () => {
				setAppState({...appState, 'userToken': {value: "", expiresAt: "", createdAt: ""}, 'loggedIn': false});
			}
		}
	},[]);

	return (  
		<AuthContext.Provider value= {authContext}>
			<NavigationContainer>
				 <ActiveStackScreen appState={appState}/>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

