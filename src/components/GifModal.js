import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const GifModal = ({ open, setOpen, onSelect, loading, gifs }) => {

    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
        >
            <div className={classes.root}>
                {loading ?
                    <CircularProgress />
                    :
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {gifs.map((tile) => (
                            <GridListTile key={tile.id} cols={tile.cols || 1}>
                                <img
                                    src={tile.images.fixed_height.url}
                                    alt={tile.title}
                                    onClick={() => onSelect(tile.images.fixed_height.url)}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                }
            </div>
        </Modal>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

export default GifModal;