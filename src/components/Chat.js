import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

import GifModal from './GifModal';
import TextBox from './TextBox';
import ChatBox from './ChatBox';
import InfoBar from './InfoBar';

const Chat = () => {

    const classes = useStyles();

    const socket = useSelector(state => state.socket.socket);
    const { nickname, room } = useSelector(state => state.user.user);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const [users, setUsers] = useState([]);

    const [gifs, setGifs] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const socketClientRef = useRef();

    useEffect(() => {

        socket.on('message', nMessage => {
            setMessages(prevMsg => [...prevMsg, nMessage]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });

        socket.emit('entered', { nickname, room }, () => { });

        socketClientRef.current = socket;

        return () => socket.emit('disconnect');
    }, []);

    const fetchGifs = async query => {
        setLoading(true);
        setOpen(true);
        const results = await axios('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: 'T8oiDd1l9m1ozAKTrR2K8a2ox6h07gpp',
                q: query
            }
        });
        setGifs(results.data.data);
        setLoading(false);
    };

    const sendMessage = event => {
        event.preventDefault();

        if (!!message) {
            if (message.startsWith('/giphy ')) {
                fetchGifs(message.slice(7));
            } else {
                socketClientRef.current.emit('sendMessage', message, moment().format('L LT'), false, () => setMessage(''));
            }
        }
    };

    const sendGif = url => {
        socketClientRef.current.emit('sendMessage', url, moment().format('L LT'), true, () => setMessage(''));
    };

    return (
        <Container maxWidth='sm' fixed className={classes.container}>
            <InfoBar
                users={users}
                nickname={nickname}
                room={room}
            />
            <ChatBox
                messages={messages}
                nickname={nickname}
            />
            <TextBox
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
            />
            <GifModal
                gifs={gifs}
                open={open}
                setOpen={setOpen}
                onSelect={(msg) => {
                    sendGif(msg);
                    setOpen(false);
                }}
                loading={loading}
            />
        </Container >
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 24,
        marginBottom: 24,
        backgroundColor: '#eee',
        borderRadius: 8,
        overflow: 'hidden',
    },
}));

export default Chat;