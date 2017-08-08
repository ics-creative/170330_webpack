import Vue from 'vue';
import Component from 'vue-class-component';

// @Component デコレータはクラスが Vue コンポーネントであることを示します
@Component({
  // ここではすべてのコンポーネントオプションが許可されています
  template: `<div>
        <h2>{{message}}</h2>
        <div>{{count}}</div>
        <button @click="onClick">Add +1</button>
      </div>`,
  props   : ['message']
})
export default class MyComponent extends Vue {
  count = 0;

  onClick(): void {
    this.count = this.count + 1;
  }
}