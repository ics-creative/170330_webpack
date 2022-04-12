import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubComponent} from './sub-component';

const  App = () => <div>
    <h1>Hello React!</h1>
    <SubComponent name="My Counter for TypeScript"/>
</div>

ReactDOM.render(<App/>, document.querySelector('#app'));
