import React from 'react';

import './Char.css';

const char = (props) => {
    return <span
        className="Char-box"
        onClick={props.clicked}>
        {props.inputCharacter}
    </span>
};

export default char;