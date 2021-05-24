import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/Search Box/search-box.component'
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state ={ 
      monsters: [],
      searchField: ''
    }
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))

  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>  
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      <div className='App'>
        <h1>Cat Box</h1>
        <SearchBox placeholder='Search Cats' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>        
      </div>
    )
  }
}