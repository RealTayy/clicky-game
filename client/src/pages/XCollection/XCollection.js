import React, { Component } from "react";

class XCollection extends Component {
  state = {
    idparam: ''
  };

  componentDidMount() {
    this.setState({ idparam: this.props.match.params.id });
  }

  render() {
    return (
      <div>
        Load XCollection with id:{this.state.idparam}
      </div>
    );
  }
}

export default XCollection;
