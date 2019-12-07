import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
  }
  onUsernameSubmitted(username) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Contnt-Type': 'application/json',
      },
      body: JSON.stringify({username}),
    })
    .then(response => {
      console.log('success')
    })
    .catch(error => {
      console.log(error)
    })
  }
  render() {
    return <UsernameForm onSubmit={username => alert(username)}/>
  }
}

export default App;
