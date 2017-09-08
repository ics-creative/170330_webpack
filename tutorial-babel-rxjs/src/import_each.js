import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';

Observable.interval(200)
  .take(9)
  .map(x => x + '!!!')
  .bufferCount(2)
  .subscribe(value => console.log(value));