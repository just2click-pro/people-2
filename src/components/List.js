import React, { Component } from 'react';
import Card from './Card';

export default class List extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list: []	
		}
	}

	updateList (newList) {
		this.setState({ list: newList })
	}

	componentDidMount () {
		this.updateList(this.props.list);
	}

	componentWillReceiveProps(nextProps) {
		this.updateList(nextProps.list)
	}

	render () {
		return (
			<div>
				<ul>
					{ this.state.list.map( (item, index) => {
						return (
							<li key={ "item_ " +index }>
								<Card person={ item } />
	 						</li>
						)
					})}
				</ul>
			</div>
		); 
	}

}