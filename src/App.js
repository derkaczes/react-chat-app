import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm';
import './App.css';

class App extends Component {
  render() {
    return <UsernameForm onSubmit={username => alert(username)}/>
  }
}

export default App;
