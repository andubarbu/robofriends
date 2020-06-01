import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robots.length){
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
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                    
                </div>
            )
        }

        }
        
    }

export default App;