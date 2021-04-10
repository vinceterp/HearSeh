// import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Image} from "react-native";
import styles from '../styles/styles';
import {NativeRouter, Route, Link} from 'react-router-native';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Dashboard from '../screens/Dashboard';

type NavigationPanelProps = {
    selectedTab?: String
}

export const NavigationPanel = (props: NavigationPanelProps) => {

    const state = useState({selectedTab: props.selectedTab});
    // console.info(state);
    // const MyImage = require("../../assets/navIcons/home_icon.png");
    // console.info(MyImage);

    return (
        <NativeRouter>
            <View style={styles.navigationPanelContainer}>

                <View>
                    <Link to="/">
                        
                        <View>
                            <Image style={styles.navIcon} source={require('../../assets/navIcons/home_icon.png')}/>
                        </View>
                    </Link>
                </View>
                <View>
                    <Link to="/explore">
                        <Image style={styles.navIcon} source={require("../../assets/navIcons/compass.png")}></Image>
                    </Link>
                </View>
                <View>
                    <Link to="/chat">
                        <Image style={styles.navIcon} source={require("../../assets/navIcons/chat_icon.png")}></Image>                  
                    </Link>
                </View>
                <View>
                    <Link to="/dashboard">
                        <Image style={styles.navIcon} source={require("../../assets/navIcons/dashboard_icon.png")}></Image>
                    </Link>
                </View>
            </View>
            <Route exact path="/explore" component={Explore}/>
            <Route path="/" component={Home}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/dashboard" component={Dashboard}/>
        </NativeRouter>
    );
}