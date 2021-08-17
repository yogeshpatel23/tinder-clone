import React from 'react'
import './ActionButtons.css'

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function ActionButtons() {
    return (
        <div className='actionButtons'>
            <IconButton className="actionButton__repete">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="actionButton__repete">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="actionButton__repete">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="actionButton__repete">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="actionButton__repete">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default ActionButtons
