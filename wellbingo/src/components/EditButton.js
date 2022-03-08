import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/EditIcon.scss'
import EditIcon from '@mui/icons-material/Edit';

export const EditButton = () => {
    return (
        <Link to="/EditPage">
            <button className="edit-button">
                <EditIcon color="action" sx={{fontSize: 15}} className="edit-icon"/>
            </button>
        </Link>
    )
}
