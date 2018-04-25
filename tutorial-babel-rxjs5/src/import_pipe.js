import {interval} from 'rxjs/observable/interval';
import {bufferCount} from 'rxjs/operators/bufferCount';
import {map} from 'rxjs/operators/map';
import {take} from 'rxjs/operators/take';

interval(200)
  .pipe(
    take(9),
    map(x => x + '!!!'),
    bufferCount(2)
  )
  .subscribe(value => console.log(value));
