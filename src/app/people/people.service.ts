import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {of} from 'rxjs';

@Injectable()
export class PeopleService {
  constructor() {}

  getPeople() {
    return of([
      {
        id: 1,
        name: 'Juri',
        surname: 'Strumpflohner',
        twitter: '@juristr'
      }
    ]);
  }
}
