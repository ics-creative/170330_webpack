import React from 'react';

export class SubComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Shopping List for {this.props.name}</h2>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}