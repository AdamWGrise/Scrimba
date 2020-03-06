import React from 'react'
import ContactCard from './ContactCard'
import Joke from './Joke'
import './jokesData'
import jokesData from './jokesData';
import GameCard from './GameCard';
import Title from './Title';
import Conditional from './Conditional';

function MyInfoComponent(props) {

    const firstName = 'Adam'
    const lastName = 'Grise'
    
    const jokeComponents = jokesData.map((joke) => {
        // console.log(joke)
        return (
            <Joke key={joke.id} question={joke.question} answer={joke.answer} />
        )
    })

    const gameComponents = props.data.games.map(game => 
        <GameCard key={game.id} id={game.id} title={game.title} system={game.system} price={game.price} art={game.art} owned={game.owned} shopLink={game.shopLink} handleOwnItChange={props.handleOwnItChange}/>)

    return (
        <div className="MyInfo">
            <Title />
            <h2 style={{color: props.data.color}}>I'm {firstName + ' ' + lastName}. This color is {props.data.color}.</h2>
            <p>
                <button onClick={props.handleClick}>Click me to satisfy</button> ...
                {props.data.count}
            </p>
            <hr />
            <h3>I like playing games. Here are a few:</h3>
            {/* <ul className="game-list">
                <GameItem title="Dark Souls" owned="false"/>
                <GameItem title="Cadence of Hyrule" owned="false"/>
                <GameItem title="Overcooked 2" owned="false"/>
                <GameItem title="Breath of the Wild" owned="false"/>
                <GameItem title="Half-Life: Alyx" owned="false"/>
                <GameItem title="Oddworld: Abe's Oddysey" owned="false"/>
            </ul>
            <h3>Game List v2</h3> */}
                {gameComponents}
            <hr />
            {/* Ternary: 
            condition ? statementIfTrue : statementIfFalse */}
            {props.data.isLoading ?
            <h3>...Loading...</h3> :
            <Conditional isLoading={props.data.isLoading}/>}
            {/* Conditionals can also be abbreviated with a simple AND statement */}
            {props.data.color.indexOf('77') > -1 && <h1>Jackpot! Lucky 7s!</h1>}
            <br/>Test API call to SWAPI: {props.data.loadingSwapi ? "...loading..." : props.data.swCharacter.name}
            {}
            <hr />
            <h3>Form Testing</h3>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.data.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={props.handleChange} /> &nbsp;
                <input
                    type="text"
                    value={props.data.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={props.handleChange} />
                <span style={{fontSize:"2rem", color: props.data.color}}>
                    {props.data.firstName}&nbsp;{props.data.lastName}
                </span>
                <br/>
                <textarea
                    onChange={props.handleChange}
                    value={"Checkbox loading the SWAPI..."}
                    />
                <br/>
                <label>
                    <input
                        type="checkbox"
                        checked={props.data.isFriendly}
                        onChange={props.handleChange}
                        name="isFriendly"
                    /> Is friendly?
                </label>
                <br />
                <h4>You are a {props.data.gender}.</h4>
                <label>
                    {/* Putting the whole radio input in a label lets the user click the text to select the radio button as well. */}
                    <input
                        type="radio"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                        name="gender"
                        value="female"
                    /> Female
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                        name="gender"
                        value="male"
                    /> Male
                </label>
                <br />
                <label>Favorite Color:</label>
                <select
                    value={props.data.favColor}
                    onChange={props.handleChange}
                    name="favColor"
                    >
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                </select>
                <h3>You've selected {<span style={{color:props.data.favColor}}>{props.data.favColor}</span>} as your favorite color!</h3>
                <button>Submit</button>
                {/* HTML5 buttons in a form are auto-submit */}
            </form>
            <hr />
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

export default MyInfoComponent