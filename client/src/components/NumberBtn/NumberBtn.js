import React, { Component } from 'react';
import './NumberBtn.css';

export class NumberBtn extends Component {
	render() {
		return (
			<div className="col s4 center-align custom">
				<a className="waves-effect waves-light btn-large" onClick={this.props.onClick}>					
					<i className="material-icons">{this.props.icon}</i>
				</a>
			</div>
		)
	}
};

export default NumberBtn;
