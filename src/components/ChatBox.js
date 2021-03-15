import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import { makeStyles } from '@material-ui/core/styles';

import Message from './Message';


const ChatBox = ({ nickname, messages }) => {

    const classes = useStyles();

    const selectType = msg => {
        switch (msg.user) {
            case 'admin':
                return 'admin';
            case nickname:
                return 'own';
            default:
                return 'other'
        };
    };

    return (
        <ScrollToBottom className={classes.scroll}>
            <div className={classes.chat}>
                {messages.map((msg, i) => {
                    return (
                        <Message
                            type={selectType(msg)}
                            user={msg.user}
                            text={msg.text}
                            isGif={msg.isGif}
                            time={msg.time}
                            key={i}
                        />
                    );
                })}
            </div>
        </ScrollToBottom>
    );
};

const useStyles = makeStyles((theme) => ({
    chat: {
        display: 'flex',
        flexDirection: 'column',
    },
    scroll: {
        height: 500
    }
}));

export default ChatBox;