import React from 'react';
import '../App.css';
// import GameItem from './GameItem';
import ContactCard from './ContactCard'
import Joke from './Joke'
import './jokesData'
import jokesData from './jokesData';
import gameData from './gameData';
import GameCard from './GameCard';
import Title from './Title';
import Conditional from './Conditional';

class MyInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            games: gameData,
            count: 0,
            color: 'rgba(255, 255, 255, 1.0)',
            isLoading: true,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleOwnItChange = this.handleOwnItChange.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            console.log(prevState.count)
            return {
                count: prevState.count + Math.ceil(Math.random()*100)
            }
        })
    }

    handleOwnItChange(id) {
        console.log("Changed ", id)
        this.setState(prevState => {
            const updatedGames = prevState.games.map(game => {
                if (game.id === id) {
                    return {
                        ...game,
                        owned: !game.owned
                    }
                }
                return game
            })
            // Demonstrates that State hasn't been modified directly, but a new state has been returned.
            // console.log(prevState.games)
            // console.log(updatedGames)
            return {
                games: updatedGames
            }
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
        console.log("Mounted!")
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log("componentDidUpdate triggered.")
            const newColor = 'rgba(' + this.randomColor() + ')'
            this.setState({color: newColor})
        }
    }

    randomColor() {
        let r = Math.floor((Math.random())*256)
        let g = Math.floor((Math.random())*256)
        let b = Math.floor((Math.random())*256)
        let a = Math.floor((Math.random()*0.5+0.5)*100)/100
        return(r+', '+g+', '+b+', '+a);
    }

    render() {

        const firstName = 'Adam'
        const lastName = 'Grise'
        
        const jokeComponents = jokesData.map((joke) => {
            // console.log(joke)
            return (
                <Joke key={joke.id} question={joke.question} answer={joke.answer} />
            )
        })

        const gameComponents = this.state.games.map(game => 
            <GameCard key={game.id} id={game.id} title={game.title} system={game.system} price={game.price} art={game.art} owned={game.owned} shopLink={game.shopLink} handleOwnItChange={this.handleOwnItChange}/>)

        return (
        <div className="MyInfo">
            <Title />
            <h2 style={{color: this.state.color}}>I'm {firstName + ' ' + lastName}. This color is {this.state.color}.</h2>
            <p>
                <button onClick={this.handleClick}>Click me to satisfy</button> ...
                {this.state.count}
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
            {this.state.isLoading ?
            <h3>...Loading...</h3> :
            <Conditional isLoading={this.state.isLoading}/>}
            {/* Conditionals can also be abbreviated with a simple AND statement */}
            {this.state.color.indexOf('77') > -1 && <h1>Jackpot! Lucky 7s!</h1>}
            {}
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