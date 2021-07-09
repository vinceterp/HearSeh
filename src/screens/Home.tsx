/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from "react-native";
import styles from "../styles/styles";
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

declare interface HomeProps {
    userName?: String;
}

const Home = (props: HomeProps) : JSX.Element => {
    const scheme = useColorScheme();
    return (
        <AppearanceProvider>
            <View 
            style={scheme === "dark" ? styles.darkModeContainer : styles.container}
            >
                <Text style= {{color: scheme === "dark" ? '#fff' : '#000000'}}>Home</Text>
            </View>
        </AppearanceProvider>
    );
};

export default Home;
