import React, { Component } from 'react';
import { Header } from '../../components/Header'
import { PlayArea } from '../../components/PlayArea';

class Home extends Component {
	state = {

	};

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Header />				
				<PlayArea />
			</div>)
	}
}

export default Home;