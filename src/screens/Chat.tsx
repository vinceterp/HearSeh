/* eslint-disable prettier/prettier */
import {View, Text} from "react-native";
import React from 'react';

declare interface ChatProps {
    userName?: String;
}

const Chat = (props: ChatProps) : JSX.Element => {
    // console.info(props);
    return (
        <View>
            <Text>Chat</Text>
        </View>
    );
};

export default Chat;
