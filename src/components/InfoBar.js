import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { ExitToApp, Group } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const InfoBar = ({ users, nickname, room }) => {

    const classes = useStyles();

    return (
        <Box bgcolor='info.main' className={classes.root}>
            <Box className={classes.group}>
                <Group size='large' color='primary' />
                <Box className={classes.info}>
                    <Typography variant='h5' className={classes.title}>{room}</Typography>
                    <Typography className={classes.users}>You{users.length > 1 && ', '}{users.map((user, i) => (
                        user.nickname !== nickname ?
                            `${user.nickname}${i === users.length - 1 || users[i + 1].nickname === nickname ? '' : ', '}`
                            : null
                    ))}</Typography>
                </Box>
            </Box>
            <a href='/'>
                <IconButton>
                    <ExitToApp />
                </IconButton>
            </a>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 12,
        marginLeft: -24,
        marginRight: -24,
        justifyContent: 'space-between'
    },
    group: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    info: {
        marginLeft: 24,
    },
    title: {
        marginBottom: 4,
        color: 'white',
    },
    users: {
        color: 'white',
        fontSize: 12,
    },
}));


export default InfoBar;