import React, { Component } from 'react';
import TopBar from './TopBar'; 
import List from './List'; 
import Autocomplete from './Autocomplete'; 


export default class App extends Component {

    constructor(){
        super();

        this.state = {
            data: [],
            filteredData: []
        }
    }

    componentDidMount () {
        fetch('../static/data/MOCK_DATA.json')
            .then((response) => {
                if(response.ok) {
                    return response.json()
                }
                throw new Error('Got no response');
            })
            .then((response) => {
                this.setState({ 'data': response, 'filteredData': response })
            })
            .catch((err) => {
                console.log('There was an error getting data', err);
            })
    }

    updateTerm (filtered) {
        let filteredList = this.state.data.filter((item) => {
            return ((item.first_name.toLowerCase().includes(filtered.toLowerCase()) ||
                item.last_name.toLowerCase().includes(filtered.toLowerCase())));   
        });
        this.setState({ filteredData: filteredList });
    }

    render() {
        return (
        <div className="app">
            <TopBar name={ this.state.name }>
                React Components are state machines
            </TopBar>
            <Autocomplete data={ this.state.data } 
                onTermChange={ this.updateTerm.bind(this) }
                filtered={ this.state.filteredData.length } 
                list={ this.state.data.length } />
            <List list={ this.state.filteredData } />
        </div>
        )
    }
}
