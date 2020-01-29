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
    }

    render(props) {
        const style = this.yourMethodHere();
        // Put any styling stuff here, conditional rendering, etc.
        return(
            <div className="game-card card">
                <a href={this.props.shopLink}>
                    <img className="game-card-img" src={this.props.art} alt=""/>
                </a>
                <h3>{this.props.title}</h3>
                <p>Price: {this.props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                <p>Platform(s): {this.props.system.join(', ')}</p>
            </div>
        )
    }
}

export default GameCard