import React from 'react';
import '../App.css';

function GameItem(props) {
    return(
        <li className='game-item'><input type="checkbox" /> {props.title}</li>
    )
}

export default GameItem