import React, { Component } from 'react'
//import json from '../json'
import Employee from './Employee'
import './List.css'
import ListItem from './ListItem.js'

class List extends Component {

    constructor(){
        super()
        
        this.state = {
            selectedParty: null,
            data: {},
            isLoaded: false,
            partyArray: [],
            filtered: false
        }
        
    }

    handleChange = (party) => {
        this.setState({selectedParty: party, 
            filtered: party === 'All' ? false : true})
    }



    componentDidMount(){
        let url = 'http://data.riksdagen.se/personlista/?utformat=json'
        fetch(url).then(response => response.json())
            .then((jsonData) => {
               this.setState({
                   isLoaded: true,
                   data: jsonData.personlista.person.map(person => person)
                   .sort((a,b) => a.parti > b.parti ? 1 : -1),
                   partyArray: [...new Set(jsonData.personlista.person.map(person => person.parti))]
               })
               console.log(this.state)
            })
    }

  render() {
      let {isLoaded, data} = this.state
    if (!isLoaded) {
          return(
              <div className="loadingAnimation" ></div>
          )
    } 
    else {
    return (
        <div>
                <ul className="partyList">
                    <ListItem changeHandler={() => this.handleChange('All')} label={'All'}>Parties</ListItem>
                    {this.state.partyArray
                    .map(party => <ListItem 
                        changeHandler={() => this.handleChange(party)}
                        label={party} 
                        className='listItem' key={party} />)}
            </ul>
            <div className="employeeDisplay">
                {data
                    .filter(person => !this.state.filtered ? true : person.parti === this.state.selectedParty)
                    .map(person => 
                        <Employee 
                            image={person.bild_url_80}
                            lastName={person.efternamn} 
                            key={person.hangar_guid} 
                            person={person}/>)}
            </div>
    </div> 
    );}
  }
}

export default List;