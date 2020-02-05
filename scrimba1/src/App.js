import React from 'react';
import './App.css';
import MyInfo from './components/MyInfo'
import AwesomeFooter from './components/Footer'
import AwesomeHeader from './components/Header'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            testValue: "Epico.",
            headerLabel: "Welcome to Adam's React Sandbox"
        }
    }

    render() {
        return (
            <div>
                <AwesomeHeader headerLabel={this.state.headerLabel}/>
                <MyInfo />
                <AwesomeFooter />
                {this.state.testValue}
            </div>
        );
    }
}

export default App;
