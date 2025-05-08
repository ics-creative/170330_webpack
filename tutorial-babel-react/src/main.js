import React from "react";
import {createRoot} from "react-dom/client";

import { SubComponent } from "./sub-component";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="logo.svg" alt="" />
        </div>

        <h1>Hello React!</h1>
        <SubComponent name="My Counter for Babel" />
      </div>
    );
  }
}
createRoot(document.querySelector("#app")).render(<App />);
