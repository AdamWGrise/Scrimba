import React from 'react';
import './App.css';
import MyInfo from './components/MyInfo'
import AwesomeFooter from './components/Footer'
import AwesomeHeader from './components/Header'

function App() {
  return (
    <div>
        <AwesomeHeader />
        <MyInfo />
        <AwesomeFooter />
    </div>
  );
}

export default App;
