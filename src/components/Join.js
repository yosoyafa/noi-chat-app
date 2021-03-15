import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';

import { createSocket, addUser } from '../actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import TelegramIcon from '@material-ui/icons/Telegram';

import { makeStyles } from '@material-ui/core/styles';

const ENDPOINT = 'https://noi-chat.herokuapp.com/';

const Join = () => {

    const classes = useStyles();

    const [nickname, setNickname] = useState('');
    const [room, setRoom] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleJoin = () => {
        const socket = io(ENDPOINT);
        dispatch(createSocket(socket));

        socket.emit('join', { nickname, room }, (error) => {
            if (error) {
                alert(error);
            } else {
                dispatch(addUser({ nickname, room }));
                history.push('/chat');
            }
        });
    };

    return (
        <Container maxWidth='xs' className={classes.container}>
            <Typography variant='h2' className={classes.title}>NoiChat</Typography>
            <TextField
                variant='outlined'
                type='text'
                label='Nickname'
                placeholder='James Rodriguez'
                value={nickname}
                className={classes.textFiled}
                fullWidth
                onChange={event => setNickname(event.target.value)}
            />
            <TextField
                variant='outlined'
                type='text'
                label='Room'
                placeholder='Real Madrid'
                value={room}
                className={classes.textFiled}
                fullWidth
                onChange={event => setRoom(event.target.value)}
            />
            <Button
                variant='contained'
                color='primary'
                endIcon={<TelegramIcon />}
                disabled={!nickname || !room}
                onClick={handleJoin}
                fullWidth
            >
                JOIN
            </Button>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24
    },
    title: {
        marginBottom: 24
    },
    textFiled: {
        marginBottom: 12
    }
}));

export default Join;