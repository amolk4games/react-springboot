import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  FirstComponent from './components/example-components/FirstComponent';
import  SecondComponent from './components/example-components/SecondComponent';
import  Counter from './components/counter/Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <Counter/>
        <Counter by={5}/>
        <Counter by={10}/>
      </div>
    );
  }
}

class ExampleComponent extends Component{
  render() {
    return (
      <div className="example">
        My hello React App!
        <FirstComponent/>
        <SecondComponent/>
      </div>
    );
  }
}
export default App;