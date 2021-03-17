import React, { useState } from 'react';

import actions from '../actions';

const TitleForm = (props)=> {
    const [newTitleText, setNewTitleText] = useState('');

    const handleChange = e => {
        setNewTitleText(e.target.value);
    };

    const handleClick = ()=> {
        props.handleClick(newTitleText, false);
        setNewTitleText("");
    }

    return(<div>
        <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChange}
        />
        <button
            onClick={handleClick}>
            Update title
        </button>
    </div>)
}

export default TitleForm;