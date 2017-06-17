import React, { Component } from 'react';
import Thumb from './Thumb';

export default class Card extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let {first_name, last_name, id, description} = this.props.person;
    return(
    	<div className="details">
    		<h2>Name: {first_name}, {last_name}</h2>
    		<p>{ description }</p>
	    </div>
    )
	}
}