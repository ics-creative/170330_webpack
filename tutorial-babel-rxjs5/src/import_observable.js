import { Observable } from "rxjs";

Observable.interval(200)
  .take(9)
  .map((x) => x + "!!!")
  .bufferCount(2)
  .subscribe((value) => console.log(value));
