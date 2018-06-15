import {Hello} from './sub';

const message = 'Hello World';

// sub.jsに定義されたJavaScriptを実行する。
const instance = new Hello();
instance.say(message);