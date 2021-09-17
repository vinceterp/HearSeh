/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from "react-native";
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
                style={{...scheme === "dark" ? styles.darkModeContainer : styles.container}}
            >
                <Text style={{
                    fontFamily: 'Lobster',
                    color: '#717171',
                    fontSize: 48,
                    lineHeight: 60,
                    position: 'absolute',
                    width: 174,
                    height: 60,
                    left: 100,
                    top: 59,
                }}>HearSeh</Text>
            </View>
        </AppearanceProvider>
    );
};

export default Home;
