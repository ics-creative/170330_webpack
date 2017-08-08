import Vue from 'vue'
import Component from 'vue-class-component';
// @Component デコレータはクラスが Vue コンポーネントであることを示します
@Component({
  // ここではすべてのコンポーネントオプションが許可されています
  template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
  // 初期データはインスタンスプロパティとして宣言できます
  message: string = 'Hello!';

  // コンポーネントメソッドはインスタンスメソッドとして宣言できます
  onClick(): void {
    window.alert(this.message);
  }
}