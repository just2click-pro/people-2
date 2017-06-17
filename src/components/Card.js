import React, { Component } from 'react';
import Thumb from './Thumb';
import Details from './Details';

export default class Card extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let person = this.props;
    return(
    	<div className="card">
    		<Thumb {...person}/>
	    	<Details {...person}/>
	    </div>
    )
	}
}