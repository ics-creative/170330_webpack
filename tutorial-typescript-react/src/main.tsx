import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubComponent} from './sub-component';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello React!</h1>
          <SubComponent name="My App Store"/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
