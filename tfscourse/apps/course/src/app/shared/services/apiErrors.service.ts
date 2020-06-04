import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ApiErrorsService {
  errors$ = new Subject<number>();
}
