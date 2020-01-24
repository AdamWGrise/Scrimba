import React from 'react';
import '../App.css';
import GameItem from './GameItem';
import ContactCard from './ContactCard'
import Joke from './Joke'
import './jokesData'
import jokesData from './jokesData';

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

    const jokeComponents = jokesData.map((joke) => {
        return (
            <Joke key={joke.id} question={joke.question} answer={joke.answer} />
        )
    })

    return (
    <div className="MyInfo" style={styles}>
        <h1 style={{fontSize: '3rem'}}>Good {timeOfDay}.</h1>
        <h2>I'm {firstName + ' ' + lastName}.</h2>
        <p>I like playing games. Here are a few:</p>
        <ul className="game-list">
            <GameItem title="Dark Souls"/>
            <GameItem title="Cadence of Hyrule"/>
            <GameItem title="Overcooked 2"/>
            <GameItem title="Breath of the Wild"/>
            <GameItem title="Half-Life: Alyx"/>
            <GameItem title="Oddworld: Abe's Oddysey"/>
        </ul>
        <h3>Potterverse Contact Cards</h3>
        <ContactCard
            contact={{
                name:"Fred",
                imgUrl:"https://vignette.wikia.nocookie.net/harrypotter/images/9/90/Fred_HS_TDH_promo.jpg/revision/latest?cb=20161119235258",
                maritalStatus:"Single",
                status:"Deceased"
            }}/>
        <ContactCard 
            contact={{
                name:"George",
                imgUrl:"https://vignette.wikia.nocookie.net/harrypotter/images/2/2a/DH_promo_front_closeup_George_Weasley.jpg/revision/latest?cb=20161119235305",
                maritalStatus:"Married",
                status:"Alive"
            }}/>
        <ContactCard 
            contact={{
                name:"Ron",
                imgUrl:"https://vignette.wikia.nocookie.net/harrypotter/images/c/ce/Rondhface.jpg/revision/latest?cb=20101104210200",
                maritalStatus:"Married",
                status:"Alive"
            }}/>
        <ContactCard 
            contact={{
                name:"Ginny",
                imgUrl:"https://vignette.wikia.nocookie.net/harrypotter/images/8/8b/Ginny_Weasley_hbp_promo.jpg/revision/latest/scale-to-width-down/350?,cb=20180322181904",
                maritalStatus:"Married",
                status:"Alive"
            }}/>
        <h3>Jokes</h3>
            {jokeComponents}
    </div>
    );
}

export default MyInfo;


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex