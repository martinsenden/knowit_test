import React, { Component } from 'react'
import List from './Components/List'
import './Main.css';
class Main extends Component {

  render() {
    return (
      <div>
        <nav className="header">
          <p>Find your parliament buddies</p>
        </nav>
       <List />   
      </div>
    );
  }
}

export default Main;