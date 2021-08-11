import React from 'react';
import Counter from './Counter';
import './App.css';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      mount:false,
      ignoreProp:0
    }

    this.mountCounter=()=>this.setState({mount:true});
    this.unmountCounter=()=>this.setState({mount:false});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
       {this.state.mount ? <Counter/> : ""}
      </div>
    )
  }
}