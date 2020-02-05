import React from 'react';
import Nav from './Nav'
import '../App.css';

function AwesomeHeader(props) {
  return (
    <div className="Header">
        <Nav headerLabel={props.headerLabel}/>
    </div>
  );
}

export default AwesomeHeader;