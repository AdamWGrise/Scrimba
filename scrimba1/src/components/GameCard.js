import React from 'react';
import '../App.css';

// functional component:

// function GameCard(props) {
//     console.log(props);
//     return(
//         <div className="game-card card">
//             <a href={props.shopLink}>
//                 <img className="game-card-img" src={props.art} alt=""/>
//             </a>
//             <h3>{props.title}</h3>
//             <p>Price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
//             <p>Platform(s): {props.system.join(', ')}</p>
//         </div>
//     )
// }


// Class-based version
class GameCard extends React.Component {

    yourMethodHere() {
        // Build a method here
    };

    constructor() {
        super()
    };

    render(props) {
        const style = this.yourMethodHere();
        
        let mouseOver = function() {
            console.log("Hey, something got moused over!")
        }

        let pluralPlatforms
        if (this.props.system.length > 1) {
            pluralPlatforms = "(s)"
        }

        // Put any styling stuff here, conditional rendering, etc.
        return(
            <div className="game-card card" onClick={() => {console.log("I was clicked.")}}>
                <a href={this.props.shopLink}>
                    <img className="game-card-img" src={this.props.art} alt="" onMouseOver={mouseOver}/>
                </a>
                <h3>{this.props.title}</h3>
                <p>Price: {this.props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                <p>Platform{pluralPlatforms}: {this.props.system.join(', ')}</p>
                <input
                    type="checkbox"
                    onChange={function() {console.log("Changed.")}}
                    checked={this.props.owned}
                />
                <span> Own it!</span>
            </div>
        )
    }
}

export default GameCard