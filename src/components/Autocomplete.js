import React, { Component } from 'react';

export default class Autocomplete extends Component {

	constructor (props) {
		super(props);

		this.$selectionInput = null;
	}

	updateTerm (e) {
		this.props.onTermChange(e.target.value);
	}

	render () {
		return (
			<div className="input-group">
				<h1 className="label">&nbsp;Search:&nbsp;
				<input className="input" ref={ (el) => { this.$selectionInput = el; }} 
					type="text" onChange={ (e)=> this.updateTerm(e) } />&nbsp;&nbsp;<label>{ this.props.filtered }/{ this.props.list }</label></h1>
			</div>
		)
	}
}