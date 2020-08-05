import Vue from "vue";
import Component from "vue-class-component";

@Component({
  template: ` <div>
    <h2>{{ message }}</h2>
    <p>{{ count }}</p>
    <p>
      <button @click="onClick">Add +1</button>
    </p>
  </div>`,
  props: ["message"],
})
export default class MyComponent extends Vue {
  count = 0;

  onClick() {
    console.log("クリックされました");
    this.count = this.count + 1;
  }
}
