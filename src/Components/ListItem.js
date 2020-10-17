import React from 'react'
import './ListItem.css'

const ListItem = (props) => (
    <li onClick={props.changeHandler} className='listItem' key={props.party}>{props.label}</li>   
)

export default ListItem