import React from 'react';
import '../scss/EditIcon.scss'
import EditIcon from '@mui/icons-material/Edit';

export const EditButton = () => {
    return (
        <button className="edit-button">
            <EditIcon color="action" sx={{fontSize: 15}} className="edit-icon"/>
        </button>
    )
}
