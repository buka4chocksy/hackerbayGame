import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


function Starting(props) {
	return (
		<div>
			<h2>Maze Game</h2>
			<p>You need to eat all the mashrooms in 64 steps. By Default maze size is 10 x 10, you can change it by reloading or entering the height and width in prompt.</p>
		</div>
		)
}





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
    </div>
  )
}
}

export default App;
