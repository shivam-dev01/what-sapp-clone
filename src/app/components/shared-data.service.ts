import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

 selectionSubject: Subject<string> = new Subject();


  constructor() { }
  
}
