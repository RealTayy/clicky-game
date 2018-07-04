import React, { Component } from 'react';
import { NumberBtn } from '../NumberBtn/NumberBtn';
import { Counter } from '../Counter/Counter';

export class PlayArea extends Component {
	state = {
		currentScore: 0,
		highScore: 0,
		icons: ['adb', 'alarm', 'album', 'all_out', 'assignment_ind', 'attachment', 'audiotrack', 'brightness_5', 'brush', 'build', 'call_merge', 'call'],
		iconsClicked: [],
		info: 'Hi welcome to my clicky game. Click all the buttons without clicking the same one twice to win!'
	}

	drawButton = (icon) => {
		return (
			<NumberBtn key={icon} icon={icon} onClick={() => this.buttonClick(icon)}></NumberBtn>
		)
	}

	startNewGame = () => {
		this.setState({
			currentScore: 0,
			iconsClicked: [],
			info: 'Incorrect! Try again!',
		})
	}

	buttonClick = (icon) => {
		// Shuffles Buttons
		this.setState({ icons: this.shuffleIcons(this.state.icons) })
		// If button has been guessed...!
		if (this.state.iconsClicked.includes(icon)) {
			// Clicked button again logic
			console.log('Lose');
			this.startNewGame();
		}
		// If button hasn't been guessed...				
		else {
			// Clicked new button logic
			console.log('Correct');
			// Push clicked num into numberClicked array
			this.state.iconsClicked.push(icon);
			this.setState({
				currentScore: this.state.currentScore + 1,
				highScore: Math.max(this.state.currentScore + 1, this.state.highScore),
				info: 'Correct!',
			})
		}
		console.log(this.state.iconsClicked);
	}

	shuffleIcons = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}

		return arr;
	}

	render() {
		return (
			<div className="container">
				<Counter currentScore={this.state.currentScore} highScore={this.state.highScore} />
				<div className="playArea row">
					{this.state.icons.map((icon) => {
						return this.drawButton(icon);
					})}
				</div>
				<div className="infoArea center-align">
					<h4>
						{this.state.info}
					</h4>
				</div>
			</div>
		)
	}
};

export default PlayArea;
