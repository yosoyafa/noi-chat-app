import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const Message = ({ text, isGif, time, type, user, key }) => {

    const classes = useStyles();

    return (
        type === 'admin' ?
            <Box
                key={key}
                className={classes.adminMessage}
            >
                <p>{text}</p>
            </Box>
            :
            <Box
                key={key}
                flex={1}
                flexWrap='wrap'
                bgcolor={type === 'own' ? 'primary.dark' : 'primary.light'}
                className={type === 'own' ? classes.ownMessage : classes.otherMessage}
            >
                <Typography className={classes.name}>{user}</Typography>
                {
                    isGif ?
                        <img className={classes.img} src={text} alt={text} />
                        :
                        <Typography
                            className={classes.message}
                        >
                            {text}
                        </Typography>
                }
                <Typography
                    className='Message'
                    variant='caption'
                    className={classes.time}
                >
                    {time}
                </Typography>
            </Box >
    );
};

const useStyles = makeStyles((theme) => ({
    ownMessage: {
        display: 'flex',
        alignSelf: 'flex-end',
        flexDirection: 'column',
        borderRadius: 8,
        marginBottom: 12,
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12,
        width: '70%',
        flex: 1,
    },
    otherMessage: {
        display: 'flex',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        borderRadius: 8,
        marginBottom: 12,
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12,
        width: '70%',
    },
    adminMessage: {
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 8,
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 12,
    },
    message: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        color: 'white',
        width: '100%'
    },
    name: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        color: 'white',
        alignSelf: 'flex-end',
    },
    img: {
        width: '100%'
    }
}));

export default Message;