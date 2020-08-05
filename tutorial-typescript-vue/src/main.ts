import Vue from "vue";
import MyComponent from "./sub";

new Vue({
  el: "#app",
  template: `<div class="app">
        <h1>Hello Vue.js!</h1>
        <my-component message="My Counter for TypeScript"></my-component>
      </div>`,

  components: {
    "my-component": MyComponent,
  },
});
