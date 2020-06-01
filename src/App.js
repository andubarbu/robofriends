import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1 className='f1 mt5 navy tc'>Loading, please wait.</h1>
        }
        else{
            return (
                <div className='tc'>
                    <div style={{height: '20vh'}}>
                        <h1 className='f1 mt4 navy'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                    
                </div>
            )
        }

        }
        
    }

export default App;