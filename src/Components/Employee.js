import React, { Component } from 'react'
import './Employee.css'
class Employee extends Component {
    
  render() {
      let person = this.props.person
    return (
        <div className="employee">
            <img src={person.bild_url_192}
                alt={person.efternamn} />
                <p>{person.tilltalsnamn + ' ' + person.efternamn}</p> 
                <p>Party: {person.parti}</p>
        </div>
    );
  }
}

export default Employee;