/* eslint-disable prettier/prettier */
import {View, Text} from "react-native";
import React from 'react';

declare interface HomeProps {
    userName?: String;
}

const Home = (props: HomeProps) : JSX.Element => {
    // console.info(props);
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;
