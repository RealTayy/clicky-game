import React, { Component } from 'react';

export class Counter extends Component {

	render(props) {
		return (
			<div className="container center-align">
				<div className="row">
					<div className="col s2"></div>
					<h5 className="col s4">Current Score: {this.props.currentScore}</h5>
					<h5 className="col s4">High Score: {this.props.highScore}</h5>
					<div className="col s2"></div>
				</div>
			</div>
		)
	}
};

export default Counter;
