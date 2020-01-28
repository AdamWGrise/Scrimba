import React from 'react';

function GameCard(props) {
    console.log(props)
    return(
        <div className="game-card">
            <img className="game-card-img" src={props.art} alt=""/>
            <h3>{props.title}</h3>
            <p>Price: ${props.price}</p>
            <p>Platform(s): {props.system.join(', ')}</p>
        </div>
    )
}

export default GameCard