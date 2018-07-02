import React, { Component } from 'react';
import { XComponentOne, XComponentTwo } from '../../components/XComponent'

class XPage extends Component {
  state = {
    array: ['X', 'Page', 'Array'],
    string: 'XPageString',
  };

  componentDidMount() {
  }

  render() {
    return (<div>
      <XComponentOne array={this.state.array} string={this.state.string} />
      <XComponentTwo array={this.state.array} string={this.state.string} />
    </div>);
  }
}

export default XPage;
