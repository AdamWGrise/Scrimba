import React from 'react';
import '../App.css';
// import GameItem from './GameItem';

import gameData from './gameData';

import MyInfoComponent from './MyInfoComponent'

class MyInfoContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            games: gameData,
            count: 0,
            color: 'rgba(255, 255, 255, 1.0)',
            isLoading: true,
            loadingSwapi: false,
            swCharacter: {},
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "female",
            favColor: "green",
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleOwnItChange = this.handleOwnItChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({
            [name]: value,
        })

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
        this.setState({
            loadingSwapi: true
        })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    swCharacter: data,
                    loadingSwapi: false
                })
            })        
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
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
        return(
            <MyInfoComponent
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                handleOwnItChange={this.handleOwnItChange}
                data={this.state}
            />
        )
    }
}

export default MyInfoContainer;


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex