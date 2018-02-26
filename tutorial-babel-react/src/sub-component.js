import React from 'react';

export class SubComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick() {
    console.log('クリックされました');
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>Add +1</button>
      </div>
    );
  }
}
