import React from 'react';

import './UserOutput.css';

const userOutPut = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>paragraph 2</p>
        </div>
    )
};

export default userOutPut;