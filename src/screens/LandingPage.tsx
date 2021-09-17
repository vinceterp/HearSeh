import React, {useRef} from 'react';
import {NavigationContainer, TabActions} from "@react-navigation/native";
import {TouchableOpacity, Animated, Image, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Dashboard from '../screens/Dashboard';
import styles from '../styles/styles';

declare interface LandingPageProps {
    loggedIn?: Boolean
}

const LandingPage = (props: LandingPageProps) => {
    const LandingPageNavigator = createBottomTabNavigator();

    const bumpAnimation = useRef(new Animated.Value(0)).current;
    // const bumpMotion = () => {
    //     Animated.spring(bumpAnimation, {
    //         toValue: 40,
    //         useNativeDriver: true,
    //     }).start();

    //     Animated.spring(bumpAnimation, {
    //         toValue: 0,
    //         useNativeDriver: true,
    //     }).start();
    // }
    React.useEffect(()=> {
        Animated.spring(
            bumpAnimation,
            {
                toValue: 20,
                useNativeDriver: true,
            }
        ).start();
    }, [bumpAnimation])

    return (
        <LandingPageNavigator.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {...styles.navigationPanelContainer}
        }}>
                <LandingPageNavigator.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <Animated.View>
                                    <Image style={{...styles.navIcon, opacity: focused ? 1 : 0.5}} source={require('../../assets/navIcons/home_icon.png')}/>   
                                </Animated.View>)}
                    }}/>
                <LandingPageNavigator.Screen 
                    name="Explore" 
                    component={Explore}
                    options= {{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <Image style={{...styles.navIcon, opacity: focused ? 1 : 0.5}} source={require("../../assets/navIcons/compass.png")}></Image>
                                </View>)}
                    }}/>
                <LandingPageNavigator.Screen 
                    name="Chat" 
                    component={Chat}
                    options= {{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <Image style={{...styles.navIcon, opacity: focused ? 1 : 0.5}} source={require("../../assets/navIcons/chat_icon.png")}></Image>
                                </View>)}
                    }}/>
                <LandingPageNavigator.Screen 
                    name="Dashboard" 
                    component={Dashboard} 
                    options= {{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <Image style={{...styles.navIcon, opacity: focused ? 1 : 0.5}} source={require("../../assets/navIcons/dashboard_icon.png")}></Image>
                                </View>)}
                    }}/>
        </LandingPageNavigator.Navigator>
    );
} 

export default LandingPage;