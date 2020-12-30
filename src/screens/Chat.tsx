/* eslint-disable prettier/prettier */
import React from 'react';

declare interface ChatProps {
    userName?: String;
}

const Chat = (props: ChatProps) : JSX.Element => {
    console.info(props);
    return (
        <div>
            <p>Chat</p>
        </div>
    );
};

export default Chat;
