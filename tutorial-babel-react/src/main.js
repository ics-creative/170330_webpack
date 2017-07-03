import {render} from 'react-dom';
import {Component} from 'react';
import {SubComponent} from './sub-component';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <SubComponent />
      </div>
    );
  }
}

render(<App/>, document.body);