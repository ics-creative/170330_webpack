import { interval } from "rxjs";
import { bufferCount, map, take } from "rxjs/operators";

import * as rxjs from "rxjs";

rxjs
  .interval(200)
  .pipe(
    take(9),
    map((x) => x + "!!!"),
    bufferCount(2)
  )
  .subscribe((value) => console.log(value));
