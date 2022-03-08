import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const PopUp = (props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal
            open={props.bingo}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2"> 
                        You are awesome!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        description
                    </Typography>
                    <Button onClick={props.handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default PopUp;
