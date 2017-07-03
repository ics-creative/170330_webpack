import * as React from 'react';

// Propsの型定義
interface IndexProps {
  name: string;
}

export class SubComponent extends React.Component<IndexProps> {
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