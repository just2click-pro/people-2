import React, { Component } from 'react';

export default class Thumb extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let {first_name, last_name, avatar} = this.props.person;
		let fullName = first_name + (last_name ? ', ' + last_name: '');
    return(
    		<div className="thumb">
    			<img src={avatar} alt={fullName} />
    		</div>
    )
	}
}