import React from 'react';
import './App';
import './App.css';

export default class Counter extends React.Component {

	constructor(props){
		console.log('Constructor');
		super(props);
		this.state={
			counter:0
		}

		this.increment=()=>this.setState({counter:this.state.counter+1});
		this.decrement=()=>this.setState({counter:this.state.counter-1});

	}

	componentDidMount(){
		console.log('component-Did-Mount');
		console.log("-------------------")
	}

	shouldComponentUpdate(nextProps,nextState){
		return true;
	}

	render() {
		console.log('Rendered')
		return (
			<div className="App">
				<h1>counter: {this.state.counter}</h1>
				<button onClick={this.decrement}>decrement</button>
				<button onClick={this.increment}>increment</button>
			</div>
		)
	}

	componentDidUpdate(prevProps,prevState,snapshot){
		console.log("component did updated");
		console.log("-------------------")

	}

	componentWillUnmount(){
		console.log("component will UnMount");
		console.log("-------------------")
	}
}