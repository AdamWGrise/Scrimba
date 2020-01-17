import React from 'react';
import '../App.css';

function MyInfo() {
  return (
    <div className="MyInfo">
        <h2>Adam G</h2>
        <p>I like playing games. Here are a few:</p>
        <ul>
            <li><input type="checkbox" /> Hollow Knight</li>
            <li><input type="checkbox" /> Dark Souls</li>
            <li><input type="checkbox" /> Cadence of Hyrule</li>
            <li><input type="checkbox" /> Overcooked 2</li>
            <li><input type="checkbox" /> Breath of the Wild</li>
            <li><input type="checkbox" /> Half-Life: Alyx</li>
        </ul>
    </div>
  );
}

export default MyInfo;
