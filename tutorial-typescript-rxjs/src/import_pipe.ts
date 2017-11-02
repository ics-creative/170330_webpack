import {interval} from 'rxjs/observable/interval';
import {bufferCount, map, take} from 'rxjs/operators';

interval(200)
    .pipe(
        take(9),
        map(x => x + '!!!'),
        bufferCount(2),
    )
    .subscribe(value => console.log(value));