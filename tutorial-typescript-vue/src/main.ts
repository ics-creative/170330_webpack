import { createApp, defineComponent } from "vue";
import MyComponent from "./sub";

const App = defineComponent({
  template: `<div class="app">
        <h1>Hello Vue.js!</h1>
        <my-component message="My Counter for TypeScript"></my-component>
      </div>`,

  components: {
    "my-component": MyComponent,
  },
});

createApp(App).mount("#app");
