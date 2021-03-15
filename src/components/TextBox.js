import React from 'react';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import { Send } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const TextBox = ({ message, setMessage, sendMessage }) => {

    const classes = useStyles();

    return (
        <Box width='100%' className={classes.textBox}>
            <TextField
                fullWidth
                variant='outlined'
                value={message}
                className={classes.textField}
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <div onClick={e => sendMessage(e)}>
                <IconButton>
                    <Send />
                </IconButton>
            </div>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    textBox: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 24,
    },
    textField: {
        marginRight: 16,
    },
}));

export default TextBox;