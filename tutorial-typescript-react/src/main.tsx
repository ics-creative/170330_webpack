import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {SubComponent} from './sub-component';

const  App = () => <div>
    <h1>Hello React!</h1>
    <SubComponent name="My Counter for TypeScript"/>
</div>

createRoot(document.querySelector('#app')!).render(<App/>);
