import { defineComponent } from "vue";

export default defineComponent({
  template: ` <div>
    <h2>{{ message }}</h2>
    <p>{{ count }}</p>
    <p>
      <button @click="onClick">Add +1</button>
    </p>
  </div>`,
  props: ["message"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      console.log("クリックされました");
      this.count = this.count + 1;
    },
  },
});
