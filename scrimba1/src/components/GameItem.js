import React from 'react';
import '../App.css';

function GameItem(props) {
    return(
        <li className='game-item'>
            <input
                type="checkbox"
                onChange={function() {console.log("Changed!")}}
                checked={props.owned}/>
            <span>{props.title}</span>
        </li>
    )
}

export default GameItem