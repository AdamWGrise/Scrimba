import React from 'react';
import '../App.css';
import GameItem from './GameItem';

function MyInfo() {
    const firstName = 'Adam'
    const lastName = 'Grise'
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {

    }

    if (hours < 12) {
        timeOfDay = 'morning'
        styles.color = '#5A6384'
        styles.backgroundColor = '#E59A83'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
        styles.color = '#362'
        styles.backgroundColor = 'lightblue'
    } else {
        timeOfDay = 'evening'
        styles.color = '#ffd'
        styles.backgroundColor = '#113'
    }

  return (
    <div className="MyInfo" style={styles}>
        <h1 style={{fontSize: '3rem'}}>Good {timeOfDay}.</h1>
        <h2>I'm {firstName + ' ' + lastName}.</h2>
        <p>I like playing games. Here are a few:</p>
        <ul className="game-list">
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            {/* <li><input type="checkbox" /> Dark Souls</li>
            <li><input type="checkbox" /> Cadence of Hyrule</li>
            <li><input type="checkbox" /> Overcooked 2</li>
            <li><input type="checkbox" /> Breath of the Wild</li>
            <li><input type="checkbox" /> Half-Life: Alyx</li> */}
        </ul>
    </div>
  );
}

export default MyInfo;
