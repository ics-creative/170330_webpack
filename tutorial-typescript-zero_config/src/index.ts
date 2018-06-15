import {Hello} from './sub';

const message: string = 'Hello World';

// sub.jsに定義されたJavaScriptを実行する。
new Hello().say(message);
