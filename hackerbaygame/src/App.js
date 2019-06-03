import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let createReactClass = require('create-react-class');
let items = []
let no_of_moves;
const max_no_of_moves = 64;
let mario_jump;
let max_mashroom;


function Starting(props) {
	return (
		<div>
			<h2>Maze Game</h2>
			<p>You need to eat all the mashrooms in 64 steps. By Default maze size is 10 x 10, you can change it by reloading or entering the height and width in prompt.</p>
		</div>
		)
}

function GameOutcome(props) {
	let score_achived  = document.getElementById('score_achived')
	
	let no_of_moves_score = document.getElementById('no_of_moves')
	let steps_remaining = document.getElementById('steps_remaining')
	let mashrooms_remaining = document.getElementById('mashrooms_remaining')
	steps_remaining.innerHTML = max_no_of_moves -  no_of_moves
	no_of_moves_score.innerHTML = no_of_moves
	mashrooms_remaining.innerHTML = document.getElementsByClassName('active').length
	score_achived.innerHTML = max_mashroom - document.getElementsByClassName('active').length
}

let Score = createReactClass({
	getInitialState: function() {
		return {score: 0}

	},
	render: function() {
		return (
		<div id="score">
			<div>
				<p>Score Achived</p>
				<p id="score_achived">0</p>
			</div>
			<div>
				<p>Steps Used</p>
				<p id="no_of_moves">0</p>
			</div>
			<div >
				<p>Steps Remaining</p>
				<p id="steps_remaining">0</p>
			</div>
			<div >
				<p>Mashroom Remaining</p>
				<p id="mashrooms_remaining">0</p>
			</div>
		</div>
		)
	}
})







class App extends Component {
  constructor(props){
		super(props);
		let width = prompt("Enter width of game: ", "e.g. 10,20,30");
		let height = prompt("Enter height of  game: ", "e.g. 10,20,30");
		if(height == null || width == null || isNaN(width) === true || isNaN(height) === true){
			height = 10
			width = 10
		}
		let matrix_size = height * width
		mario_jump = width
		this.state = {
			matrix_size:matrix_size,
			width:width,
			height:height
		}
	}

render(){
  return (
    <div className="App">
      <Starting />
      <Score />
    </div>
  )
}
}

export default App;
