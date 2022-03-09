import React, {useState} from 'react';
import './EditList.scss';
import EditIcon from '@mui/icons-material/Edit';

export const EditList = (props) => {

    return (
        <div className="list-box">
            <ul>
                {/* {list.map((item, i) =>
                <li key={i}>
                    {props.text}
                    <button className="edit-button">
                        <EditIcon color="action" sx={{fontSize: 15}} className="edit-icon"/>
                    </button>
                </li>
                )} */}
            </ul>
        </div>
    )
}
